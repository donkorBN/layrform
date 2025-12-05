import dotenv from 'dotenv';
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';
import path from 'path';

// Explicitly load .env.local
const envPath = path.resolve(process.cwd(), '.env.local');
console.log(`Loading env from: ${envPath}`);
const result = dotenv.config({ path: envPath });

if (result.error) {
    console.error('Error loading .env.local:', result.error);
}

const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
console.log(`API Key present: ${!!apiKey}`);
if (apiKey) {
    console.log(`API Key length: ${apiKey.length}`);
    console.log(`API Key starts with: ${apiKey.substring(0, 4)}...`);
}

async function main() {
    try {
        console.log('Attempting to generate text with Gemini...');
        const { text } = await generateText({
            model: google('gemini-1.5-flash'),
            prompt: 'Say hello!',
        });
        console.log('Success! Response:', text);
    } catch (error: any) {
        console.error('Error generating text:', error.message);
        if (error.cause) {
            console.error('Cause:', error.cause);
        }
    }
}

main();
