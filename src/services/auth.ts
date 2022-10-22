import { User } from '~/typings/db';
import { httpClient } from '.';

interface AuthResponse {
  success: boolean;
  message: string;
  user: User;
}

export function login() {
  return httpClient.get<AuthResponse>('/auth/login');
}

export function logout() {
  return httpClient.post<Omit<AuthResponse, 'user'>>('/auth/logout');
}
