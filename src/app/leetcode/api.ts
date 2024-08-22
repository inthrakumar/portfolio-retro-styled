import axios from 'axios';
import type { UserProfile, SubmissionsData } from '@/types';
const getAccountDetails = async (): Promise<UserProfile | null> => {
  const url = `https://alfa-leetcode-api.onrender.com/inthrak04`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return null;
  }
};

const NoofQns = async () => {
  try {
    const url = `https://alfa-leetcode-api.onrender.com/inthrak04/solved`;
    const response = await axios.get(url, {});
    return response.data;
  } catch (error) {
    console.log(error);
    return;
  }
};

const AcceptedSubmissions = async (): Promise<SubmissionsData | null> => {
  const url = `https://alfa-leetcode-api.onrender.com/inthrak04/acSubmission?limit=10`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return null;
  }
};

export { getAccountDetails, AcceptedSubmissions, NoofQns };
