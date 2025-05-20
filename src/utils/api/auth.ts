import axios from 'axios';

const user = import.meta.env.VITE_JWT_USER || "";
const pass = import.meta.env.VITE_JWT_PASS || "";

const authApi = axios.create({
  baseURL: 'https://cms.sandboxcardleon.com/wp-json/jwt-auth/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getToken(): Promise<string> {
  try {
    const { data } = await authApi.post<{ token: string }>('/token', {
      username: user,
      password: pass,
    });

    return data.token;
  } catch (error) {
    console.error('Error getting token:', error);
    throw new Error('Token could not be fetched');
  }
}