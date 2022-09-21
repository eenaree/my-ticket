import { Team } from '@typings/db';
import { httpClient } from '.';

type FetchMyTeams = Array<{ id: number; team: Team }>;

export async function fetchMyTeams() {
  const response = await httpClient.get<FetchMyTeams>('/teams');
  return response.data;
}

export function updateMyTeams(teams: Team[]) {
  return httpClient.post('/teams/update', { teams });
}
