import axios from 'axios';

const BASE_URL = 'https://youtube-v311.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'x-rapidapi-key':import.meta.env.VITE_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-v311.p.rapidapi.com'
  }
};

export const fetchVideos = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`,options);
    return response.data
  } catch (error) {
    console.error(error);
  }
}
