import { TEAM_LIST } from '@constants/global';

export interface User {
  id: number;
  email: string;
  nickname: string;
  provider: string | null;
}

export type Team = typeof TEAM_LIST[number]['team'];
export type TeamName = typeof TEAM_LIST[number]['name'];
export type TeamList = Array<{
  team: Team;
  name: TeamName;
}>;
