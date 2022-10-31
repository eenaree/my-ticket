import { User } from '~/typings/db';
import { httpClient } from '.';

export function login() {
  return httpClient.get<{ user: User }>('/auth/login');
}

export function logout() {
  return httpClient.post('/auth/logout');
}
