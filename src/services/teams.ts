import { TeamId } from '~/typings/db';
import { httpClient } from '.';

type FetchMyTeams = Array<{
  id: number;
  team: TeamId;
}>;

export async function fetchMyTeams() {
  const response = await httpClient.get<FetchMyTeams>('/teams');
  return response.data;
}

export function updateMyTeams(teamIds: TeamId[]) {
  return httpClient.post('/teams', { teams: teamIds });
}
