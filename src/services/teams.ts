import { TeamList } from '@typings/db';
import { httpClient } from '.';

export async function fetchMyTeams() {
  const response = await httpClient.get<TeamList>('/teams');
  return response.data;
}

export function updateMyTeams(teams: TeamList) {
  return httpClient.post('/teams/update', { teams });
}
