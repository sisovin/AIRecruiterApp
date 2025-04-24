import axios from 'axios';
import { VAPI_AI_API_KEY } from '../../config/constants';

export const analyzeSentiment = async (text: string): Promise<string> => {
  try {
    const response = await axios.post('https://api.vapi.ai/sentiment', {
      text,
      apiKey: VAPI_AI_API_KEY,
    });

    if (response.data && response.data.sentiment) {
      return response.data.sentiment;
    } else {
      throw new Error('Invalid response from Vapi.ai');
    }
  } catch (error) {
    console.error('Error analyzing sentiment:', error);
    throw error;
  }
};
