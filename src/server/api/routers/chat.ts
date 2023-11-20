import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { faker } from '@faker-js/faker';
import { CommunicationAccessToken, CommunicationIdentityClient, CommunicationUserToken } from "@azure/communication-identity";
import { env } from "~/env.mjs";
import { CommunicationUserIdentifier } from "@azure/communication-common";


const connectionString = env.AZURE_COMMUNICATION_SERVICES_CONNECTION_STRING;

type TokenResponse = {
    userId: string;
    token: string;
    expiresOn: Date;
};

export const chatRouter = createTRPCRouter({

    getToken: publicProcedure.input(z.object({
        channelId: z.string(),
    })).query<TokenResponse>(async ({ ctx, input }) => {
        const existingToken = await ctx.db.token.findFirst({
            where: {
                channelId: input.channelId
            }
        })
        const client = new CommunicationIdentityClient(connectionString);

        if (existingToken !== null && existingToken.tokenExpiresAt > new Date()) {
            if (existingToken.tokenExpiresAt > new Date()) {
                return {
                    userId: existingToken.identity,
                    token: existingToken.userAccessToken,
                    expiresOn: existingToken.tokenExpiresAt
                };
            } else {

                const userResult: CommunicationAccessToken = await client.getToken({ communicationUserId: existingToken.identity }, ['chat']);
                await ctx.db.token.update({
                    where: {
                        identity: existingToken.identity,
                        channelId: input.channelId
                    },
                    data: {
                        userAccessToken: userResult.token,
                        tokenExpiresAt: userResult.expiresOn
                    }
                });
                return {
                    userId: existingToken.identity,
                    token: userResult.token,
                    expiresOn: userResult.expiresOn
                };
            }
        }
        else {
            const userResult: CommunicationUserToken = await client.createUserAndToken(['chat']);
            await ctx.db.token.create({
                data: {
                    channelId: input.channelId,
                    userAccessToken: userResult.token,
                    tokenExpiresAt: userResult.expiresOn,
                    identity: userResult.user.communicationUserId
                }
            });
            return {
                userId: userResult.user.communicationUserId,
                token: userResult.token,
                expiresOn: userResult.expiresOn
            };

        }

    }),

    createUserIdentifier: publicProcedure.mutation<CommunicationUserIdentifier>(async ({ ctx, input }) => {
        const client = new CommunicationIdentityClient(connectionString);
        const userIdentifier = await client.createUser();
        return userIdentifier;
    }),

    getUsers: publicProcedure.query(({ ctx }) => {
        return ctx.db.user.findMany();
    }),

    getUser: publicProcedure.input(z.object({
        email: z.string(),
        name: z.string()
    })).query(({ ctx, input }) => {
        const { email, name } = input;
        return ctx.db.user.findFirst({
            where: {
                email,
                name
            }
        })
    }),
    createUser: publicProcedure.input(z.object({
        name: z.string(),
        email: z.string(),
        userIdentifier: z.string()
    })).mutation(async ({ ctx, input }) => {

        const { name, email, userIdentifier } = input;
        const nickname = faker.word.adjective() + faker.word.noun();
        const result = await ctx.db.user.create({
            data: {
                name,
                email,
                userIdentifier,
                nickname
            }
        });

        return result;
    }),


    // Methods related to Chat Channels and Threads
    createChatChannel: publicProcedure
        .input(z.object({ channelId: z.string() }))
        .mutation(async ({ ctx, input }) => {
            const { channelId } = input;
            return ctx.db.chatChannel.create({
                data: {
                    Channel: {
                        connect: { id: channelId }
                    }
                }
            });
        }),

    getChatChannel: publicProcedure
        .input(z.object({ chatChannelId: z.string() }))
        .query(({ ctx, input }) => {
            // Implementation to get a chat channel
        }),

    createChatThread: publicProcedure
        .input(z.object({ chatChannelId: z.string(), threadId: z.string() }))
        .mutation(({ ctx, input }) => {
            const { chatChannelId, threadId } = input;
            return ctx.db.chatChannel.create({
                data: {
                    Channel: {
                        connect: { id: chatChannelId }
                    },
                    chatThread: {
                        create: {
                            id: threadId
                        }
                    },
                    channelId: chatChannelId,

                }
            })

        }),

    getThreadIdByChannelId: publicProcedure.input(z.object({ channelId: z.string() })).query(async ({ input, ctx }) => {
        const { channelId } = input;
        const result = await ctx.db.chatChannel.findFirst({
            where: {
                channelId: channelId
            },
            select: {
                chatThreadId: true
            }
        });

        if (result === null) {
            return { chatThreadId: null }
        }
        return result;
    }),


});


