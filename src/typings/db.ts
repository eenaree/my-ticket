import { KBO_LEAGUE_TEAMS } from '~/constants/global';

export interface User {
  id: number;
  email: string;
  nickname: string;
  provider: string | null;
}

export type TeamId = keyof typeof KBO_LEAGUE_TEAMS;
export type TeamName = typeof KBO_LEAGUE_TEAMS[TeamId];

export interface Season {
  id: number;
  season: string;
}

export interface Stadium {
  id: number;
  stadium: string;
  TeamId: number;
}

export interface Ticket {
  id: number;
  date: string;
  homeTeam: TeamId;
  awayTeam: TeamId;
  homeTeamScore: number;
  awayTeamScore: number;
  scoreType: '승' | '패' | '무';
  myTeam: TeamId;
  opponentTeam: TeamId;
  Stadium: Stadium;
  Seasons: Season[];
}
