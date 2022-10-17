import { Days, KBO_LEAGUE_TEAMS } from '@constants/global';
import { TicketFormContext } from '@context/TicketFormContext';
import { Ticket } from '@typings/db';
import { httpClient } from '.';

export type MyTicket = ReturnType<typeof decodeMyTicket>;

export function createTicket(ticket: TicketFormContext) {
  return httpClient.post('/tickets', ticket);
}

export async function fetchMyTickets() {
  const response = await httpClient.get<Ticket[]>('/tickets/my');
  return response.data.map(ticket => decodeMyTicket(ticket));
}

function decodeMyTicket(ticket: Ticket) {
  return {
    id: ticket.id,
    date: ticket.date.split('-').join('.'),
    day: Days[new Date(ticket.date).getDay()],
    seasons: ticket.Seasons.map(season => season.season),
    stadium: ticket.Stadium.stadium,
    myTeam: {
      id: ticket.myTeam,
      name: KBO_LEAGUE_TEAMS[ticket.myTeam],
      score:
        ticket.homeTeam == ticket.myTeam
          ? ticket.homeTeamScore
          : ticket.awayTeamScore,
    },
    opponentTeam: {
      id: ticket.opponentTeam,
      name: KBO_LEAGUE_TEAMS[ticket.opponentTeam],
      score:
        ticket.homeTeam == ticket.opponentTeam
          ? ticket.homeTeamScore
          : ticket.awayTeamScore,
    },
    isHome: ticket.homeTeam == ticket.myTeam,
    scoreType: ticket.scoreType,
  };
}
