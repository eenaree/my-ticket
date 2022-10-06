import { createContext, useContext, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import { TeamId, Teams } from '@typings/db';

export interface TicketFormLocationState {
  homeTeam: Teams[number];
  awayTeams: Teams;
  stadium: string;
}

interface TicketFormContext {
  matchDate: {
    year: number;
    month: number;
    date: number;
  };
  matchSeason: string;
  matchSeries: string;
  homeTeam: TeamId | undefined;
  awayTeam: TeamId | undefined;
  stadium: string;
  myTeam: TeamId | undefined;
  opponentTeam: TeamId | undefined;
}

type TicketFormActions =
  | { type: 'SET_MATCH_YEAR'; year: number }
  | { type: 'SET_MATCH_MONTH'; month: number; date: number }
  | { type: 'SET_MATCH_DATE'; date: number }
  | { type: 'SET_MATCH_SEASON'; season: string }
  | { type: 'SET_MATCH_SERIES'; series: string }
  | {
      type: 'SET_AWAY_TEAM';
      awayTeam: TeamId;
    }
  | { type: 'SET_MYTEAM'; team: TeamId };

const TicketFormContext = createContext<TicketFormContext | undefined>(
  undefined
);
const TicketFormDispatchContext = createContext<
  React.Dispatch<TicketFormActions> | undefined
>(undefined);

const ticketFormReducer: React.Reducer<TicketFormContext, TicketFormActions> = (
  state,
  action
) => {
  switch (action.type) {
    case 'SET_MATCH_YEAR':
      return {
        ...state,
        matchDate: { ...state.matchDate, year: action.year },
      };
    case 'SET_MATCH_MONTH':
      return {
        ...state,
        matchDate: {
          ...state.matchDate,
          month: action.month,
          date: action.date,
        },
      };
    case 'SET_MATCH_DATE':
      return {
        ...state,
        matchDate: { ...state.matchDate, date: action.date },
      };
    case 'SET_MATCH_SEASON':
      return {
        ...state,
        matchSeason: action.season,
        matchSeries: '',
      };
    case 'SET_MATCH_SERIES':
      return {
        ...state,
        matchSeries: action.series,
      };
    case 'SET_AWAY_TEAM':
      return {
        ...state,
        awayTeam: action.awayTeam,
      };
    case 'SET_MYTEAM':
      return {
        ...state,
        myTeam: action.team,
        opponentTeam:
          action.team == state.homeTeam ? state.awayTeam : state.homeTeam,
      };
  }
};

export function TicketFormProvider({
  children,
}: React.PropsWithChildren<unknown>) {
  const location = useLocation();
  const ticketFormState = location.state as TicketFormLocationState;

  const [state, dispatch] = useReducer(ticketFormReducer, {
    matchDate: { year: 0, month: 0, date: 0 },
    matchSeason: '',
    matchSeries: '',
    homeTeam: ticketFormState.homeTeam[0],
    awayTeam: undefined,
    stadium: ticketFormState.stadium,
    myTeam: undefined,
    opponentTeam: undefined,
  });

  return (
    <TicketFormDispatchContext.Provider value={dispatch}>
      <TicketFormContext.Provider value={state}>
        {children}
      </TicketFormContext.Provider>
    </TicketFormDispatchContext.Provider>
  );
}

export function useTicketFormDispatch() {
  const dispatch = useContext(TicketFormDispatchContext);
  if (dispatch == undefined) {
    throw new Error('TicketFormDispatchContext Provider can not found');
  }
  return dispatch;
}

export function useTicketForm() {
  const state = useContext(TicketFormContext);
  if (state == undefined) {
    throw new Error('TicketFormContext Provider can not found');
  }
  return state;
}
