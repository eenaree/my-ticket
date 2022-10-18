import create from 'zustand';
import * as TicketService from '@services/tickets';

interface TicketState {
  isEmpty: boolean;
  tickets: TicketService.MyTicket[];
  getMyTickets(): Promise<void>;
}

export const useTicketStore = create<TicketState>()(set => ({
  isEmpty: true,
  tickets: [],
  async getMyTickets() {
    try {
      const myTickets = await TicketService.fetchMyTickets();
      set({ isEmpty: myTickets.length == 0, tickets: myTickets });
    } catch (error) {
      console.error(error);
    }
  },
}));
