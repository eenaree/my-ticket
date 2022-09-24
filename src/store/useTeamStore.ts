import create from 'zustand';
import { fetchMyTeams, updateMyTeams } from '@services/teams';
import { TeamList } from '@typings/db';
import { useModalStore } from './useModalStore';

interface TeamState {
  myTeams: TeamList;
  changeMyTeams(teams: TeamList): Promise<void>;
  getMyTeams(): Promise<void>;
}

export const useTeamStore = create<TeamState>()(set => ({
  myTeams: [],
  changeMyTeams: async teams => {
    try {
      await updateMyTeams(teams);
      set({ myTeams: teams });
      useModalStore.setState({ modal: '' });
    } catch (error) {
      console.error(error);
    }
  },
  getMyTeams: async () => {
    try {
      const teams = await fetchMyTeams();
      set({ myTeams: teams });
    } catch (error) {
      console.error(error);
    }
  },
}));
