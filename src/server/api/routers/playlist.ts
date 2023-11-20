import { z } from "zod";

import { Category, Channel, Playlist } from "~/data/type";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";




export const playlistRouter = createTRPCRouter({
    getPlaylist: publicProcedure.query(({ ctx }) => {
        return ctx.db.category.findMany({
            include: {
                channels: {
                    include: {
                        urls: true
                    }
                }
            }
        });
    }),

    getChannel: publicProcedure.input(z.object({ channelId: z.string() })).query(async ({ input, ctx }) => {
        const { channelId } = input;
        const result = await ctx.db.channel.findFirst({
            where: {
                id: channelId
            },
             include:{
                urls: true
             }
        });

        return result;
    }),



});
