import create from 'zustand';
import { Teams } from '@components/TeamList';

interface TeamState {
  myTeams: Teams[];
  addMyTeam(team: Teams): void;
  removeMyTeam(team: Teams): void;
}

export const useTeamStore = create<TeamState>()(set => ({
  myTeams: [],
  addMyTeam: team => set(state => ({ myTeams: state.myTeams.concat(team) })),
  removeMyTeam: team =>
    set(state => ({
      myTeams: state.myTeams.filter(myTeam => myTeam !== team),
    })),
}));
