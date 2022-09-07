import axios from 'axios';

export const baseURL = 'http://localhost:8080/api';

export const authAPI = axios.create({
  baseURL: `${baseURL}/auth`,
  withCredentials: true,
});
