import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyTicketList from '~/components/MyTicketList';
import * as TicketService from '~/services/tickets';
import { styles } from './styles';

export default function TicketHistory() {
  const [myTickets, setMyTickets] = useState<TicketService.MyTicket[]>([]);

  useEffect(() => {
    async function getMyTickets() {
      try {
        const myTickets = await TicketService.fetchMyTickets();
        setMyTickets(myTickets);
      } catch (error) {
        console.error(error);
      }
    }
    getMyTickets();
  }, []);

  return (
    <section css={styles.wrapper}>
      <MyTicketList tickets={myTickets} />
      <Link to="register" css={styles.registerLink}>
        티켓 등록
      </Link>
    </section>
  );
}
