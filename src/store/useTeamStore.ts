import create from 'zustand';
import * as TeamService from '@services/teams';
import { TeamId } from '@typings/db';
import { useModalStore } from './useModalStore';

interface TeamState {
  myTeams: TeamId[];
  setMyTeams(teams: TeamId[]): Promise<void>;
  getMyTeams(): Promise<void>;
}

export const useTeamStore = create<TeamState>()(set => ({
  myTeams: [],
  setMyTeams: async teams => {
    try {
      await TeamService.updateMyTeams(teams);
      set({ myTeams: teams });
      useModalStore.setState({ modal: '' });
    } catch (error) {
      console.error(error);
    }
  },
  getMyTeams: async () => {
    try {
      const myTeams = await TeamService.fetchMyTeams();
      set({
        myTeams: myTeams.map(team => team.team),
      });
    } catch (error) {
      console.error(error);
    }
  },
}));
