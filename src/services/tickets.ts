import { TicketFormContext } from '@context/TicketFormContext';
import { httpClient } from '.';

export function createTicket(ticket: TicketFormContext) {
  return httpClient.post('/tickets', ticket);
}
