import create from 'zustand';
import { KBO_LEAGUE_TEAMS } from '@constants/global';
import { fetchMyTeams, updateMyTeams } from '@services/teams';
import { Teams } from '@typings/db';
import { useModalStore } from './useModalStore';

interface TeamState {
  myTeams: Teams;
  changeMyTeams(teams: Teams): Promise<void>;
  getMyTeams(): Promise<void>;
}

export const useTeamStore = create<TeamState>()(set => ({
  myTeams: [],
  changeMyTeams: async teams => {
    try {
      const teamIds = teams.map(team => team[0]);
      await updateMyTeams(teamIds);
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
        myTeams: myTeams.map(myTeam => [
          myTeam.team,
          KBO_LEAGUE_TEAMS[myTeam.team],
        ]),
      });
    } catch (error) {
      console.error(error);
    }
  },
}));
