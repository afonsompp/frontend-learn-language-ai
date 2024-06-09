import { Credentials } from 'aws-sdk';
import { AwsCredentialIdentityProvider } from '@aws-sdk/types';

export const customCredentialProvider = (input: any): AwsCredentialIdentityProvider => {

    console.log(process.env)
    return () => {
        const accessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
        const secretAccessKey = process.env.REACT_APP_AWS_ACCESS_KEY_SECRET;

        if (!accessKeyId || !secretAccessKey) {
            throw new Error('AWS credentials not found in environment variables');
        }

        return new Promise<Credentials>((resolve, reject) => {
            const credentials = new Credentials(accessKeyId, secretAccessKey);
            resolve(credentials);
        });
    };
}
