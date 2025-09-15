import { CohereClient } from 'cohere-ai';

const cohere = new CohereClient({
  token: 'HUBXuyjmHfhnb5hk5YkDwxFjKVqXEDVYGR4jipZh',
});

export async function generateResponse(
  message: string,
  personality: string,
  name: string
): Promise<string> {
  try {
    const response = await cohere.generate({
      prompt: `You are ${name}, an AI assistant with the following personality traits: ${personality}\n\nUser: ${message}\nAssistant:`,
      maxTokens: 150,
      temperature: 0.7,
      model: 'command',
      returnLikelihoods: 'NONE'
    });

    return response.generations[0].text.trim();
  } catch (error) {
    console.error('Cohere API Error:', error);
    throw new Error('Failed to generate response');
  }
}