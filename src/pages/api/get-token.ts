import type { NextApiRequest, NextApiResponse } from 'next';
import { CommunicationIdentityClient, CommunicationUserToken } from '@azure/communication-identity';

type TokenResponse = {
    userId: string;
    token: string;
    expiresOn: Date;
};
 
export default async function handler(req: NextApiRequest, res: NextApiResponse<TokenResponse | { error: string }>) {
    try {
        const connectionString = process.env.AZURE_COMMUNICATION_SERVICES_CONNECTION_STRING;
        if (!connectionString) {
            res.status(500).json({ error: "Environment variable for Azure Communication Services connection string is not set." });
            return;
        }

        const client = new CommunicationIdentityClient(connectionString);
        const existingUserId = req.query.memberId as string | undefined;

        let response: TokenResponse;

        if (existingUserId) {
            // Generate token for existing user
            const tokenResult = await client.getToken({ communicationUserId: existingUserId }, ['chat']);
            response = {
                userId: existingUserId,
                token: tokenResult.token,
                expiresOn: tokenResult.expiresOn
            };
        } else {
            // Create a new user and generate token
            const userResult: CommunicationUserToken = await client.createUserAndToken(['chat']);
            response = {
                userId: userResult.user.communicationUserId,
                token: userResult.token,
                expiresOn: userResult.expiresOn
            };
        }

        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
