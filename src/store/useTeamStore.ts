import create from 'zustand';
import { fetchMyTeams, updateMyTeams } from '@services/teams';
import { TeamId } from '@typings/db';
import { useModalStore } from './useModalStore';

interface TeamState {
  myTeams: TeamId[];
  changeMyTeams(teams: TeamId[]): Promise<void>;
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
      const myTeams = await fetchMyTeams();
      set({
        myTeams: myTeams.map(team => team.team),
      });
    } catch (error) {
      console.error(error);
    }
  },
}));
