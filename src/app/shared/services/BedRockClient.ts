import {
    BedrockRuntimeClient,
    ConverseCommand,
} from "@aws-sdk/client-bedrock-runtime";
import {ConversationRole, Message} from "@aws-sdk/client-bedrock-runtime";
import {customCredentialProvider} from './config/CustomCredentialProvider'


// Define a function that returns an object with methods for interacting with Bedrock
export function createBedrockClient() {
    // Initialize the BedrockRuntimeClient with the specified region
    const client = new BedrockRuntimeClient({region: 'us-east-1', credentialDefaultProvider: customCredentialProvider})

    // Define a function to handle the conversation
    async function converse(modelId: string, userMessage: string) {
        // Create a conversation array with the user's message
        const conversation: Message[] = [
            {
                role: ConversationRole.USER,
                content: [
                    {
                        text: userMessage
                    }
                ]
            },
        ];

        // Create a ConverseCommand with the provided parameters
        const command = new ConverseCommand({
            modelId,
            messages: conversation,
            inferenceConfig: {maxTokens: 512, temperature: 0.5, topP: 0.9},
        });

        try {
            // Send the command to the model and wait for the response
            const response = await client.send(command);

            // Extract and return the response text
            return response.output?.message?.content?.at(0)?.text
        } catch (err) {
            // Handle errors gracefully
            throw new Error(`Can't invoke '${modelId}'. Reason: ${err}`);
        }
    }

    // Return an object with the converse method
    return {
        converse,
    };
}
