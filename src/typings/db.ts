import { KBO_LEAGUE_TEAMS } from '@constants/global';

export interface User {
  id: number;
  email: string;
  nickname: string;
  provider: string | null;
}

export type TeamId = keyof typeof KBO_LEAGUE_TEAMS;
export type TeamName = typeof KBO_LEAGUE_TEAMS[TeamId];
export type Teams = Array<[TeamId, TeamName]>;
