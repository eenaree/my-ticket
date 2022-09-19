import create from 'zustand';
import { Team } from '@typings/db';

interface TeamState {
  myTeams: Team[];
}

export const useTeamStore = create<TeamState>()(() => ({
  myTeams: [],
}));
