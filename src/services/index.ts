import axios from 'axios';
import { BASE_URL } from '~/constants/global';

export const httpClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
