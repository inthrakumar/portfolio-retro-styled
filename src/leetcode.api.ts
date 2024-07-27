import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const username = process.env.USER_NAME;

const LeetCodeProfile = async () => {
  try {
    const API_URL = 'https://alfa-leetcode-api.onrender.com/';
    const response = await axios.get(API_URL, {
      params: {
        username: username,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return;
  }
};

const SubmissionQns = async () => {
  try {
    const API_URL = `https://alfa-leetcode-api.onrender.com/:${username}/acSubmission?limit=10`;
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.log('leetcode api error');
  }
};

export { LeetCodeProfile, SubmissionQns };
