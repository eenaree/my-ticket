import { TicketFormContext } from '@context/TicketFormContext';
import { httpClient } from '.';

type TicketForm = Omit<TicketFormContext, 'matchDate'> & { matchDate: string };

export function createTicket(ticket: TicketForm) {
  return httpClient.post('/tickets', ticket);
}
