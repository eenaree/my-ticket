import { useEffect } from 'react';
import { useTicketStore } from '@store/.';
import { styles } from './styles';

export default function MyTicketList() {
  const getMyTickets = useTicketStore(state => state.getMyTickets);
  const myTickets = useTicketStore(state => state.tickets);

  useEffect(() => {
    getMyTickets();
  }, [getMyTickets]);

  if (myTickets.length == 0)
    return <div css={styles.isEmpty}>등록한 티켓이 없습니다.</div>;

  return (
    <ul css={styles.myTicketList}>
      {myTickets.map(ticket => (
        <li
          key={ticket.id}
          style={{
            '--team-logo': `url('/images/team/${ticket.myTeam.id}.png')`,
          }}
        >
          <span css={styles.ticketTitle}>
            <span css={styles.date}>
              {ticket.date} ({ticket.day})
            </span>
            <span css={styles.opponentTeam}>{ticket.opponentTeam.name}</span>
          </span>
          <span css={styles.ticketInfo}>
            <strong css={styles.score}>
              <span>{ticket.myTeam.score}</span>
              <span>{ticket.opponentTeam.score}</span>
            </strong>
            <em css={styles[ticket.scoreType]}>{ticket.scoreType}</em>
            <span css={styles.stadium}>{ticket.stadium}</span>
          </span>
          <span css={styles.ticketTags}>
            {ticket.seasons.map(season => (
              <em key={season}>{season}</em>
            ))}
            {ticket.isHome && <em>홈경기</em>}
          </span>
        </li>
      ))}
    </ul>
  );
}
