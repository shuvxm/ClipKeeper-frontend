import axios from 'axios'

// Use VITE environment variable or default to localhost for dev
// const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080' || 'https://clipkeeper.onrender.com/';
const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_URL ?? 'https://clipkeeper.onrender.com';

export const downloadReel = async (url) => {
  try {
    const response = await axios.post(`${BACKEND_BASE_URL}/api/v1/instagram`, { url });

    return {
      url: response.data.videoUrl,         // Used in <ReactPlayer>
      downloadUrl: response.data.videoUrl, // Used for anchor download
      duration: 'Unknown',                 // Optional placeholder
      quality: 'HD'                        // Optional placeholder
    };
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to download video. Please check the URL and try again.');
  }
}
