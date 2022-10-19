import create from 'zustand';
import * as TicketService from '@services/tickets';

interface TicketState {
  tickets: TicketService.MyTicket[];
  getMyTickets(): Promise<void>;
}

export const useTicketStore = create<TicketState>()(set => ({
  tickets: [],
  async getMyTickets() {
    try {
      const myTickets = await TicketService.fetchMyTickets();
      set({ tickets: myTickets });
    } catch (error) {
      console.error(error);
    }
  },
}));
