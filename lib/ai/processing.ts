import axios from 'axios';
import { VAPI_AI_API_KEY } from '../../config/constants';

export const generateAIResponse = async (prompt: string): Promise<string> => {
  try {
    const response = await axios.post('https://api.vapi.ai/generate', {
      prompt,
      apiKey: VAPI_AI_API_KEY,
    });

    if (response.data && response.data.result) {
      return response.data.result;
    } else {
      throw new Error('Invalid response from Vapi.ai');
    }
  } catch (error) {
    console.error('Error generating AI response:', error);
    throw error;
  }
};
