import { User } from '@typings/db';
import { authAPI } from '.';

interface AuthResponse {
  success: boolean;
  message: string;
  user: User;
}

export function login() {
  return authAPI.get<AuthResponse>('/login');
}
