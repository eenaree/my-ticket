import * as TicketService from '~/services/tickets';
import { styles } from './styles';

interface Props {
  tickets: TicketService.MyTicket[];
}

export default function MyTicketList({ tickets }: Props) {
  if (tickets.length == 0)
    return <div css={styles.isEmpty}>등록한 티켓이 없습니다.</div>;

  return (
    <ul css={styles.myTicketList}>
      {tickets.map(ticket => (
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
