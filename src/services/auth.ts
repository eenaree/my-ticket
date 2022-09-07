import { authAPI } from '.';

export function login() {
  return authAPI.get('/login');
}
