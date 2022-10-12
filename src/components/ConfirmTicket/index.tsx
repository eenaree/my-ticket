import { KBO_LEAGUE_TEAMS } from '@constants/global';
import { useTicketForm } from '@context/TicketFormContext';
import { colors } from '@styles/theme';
import { styles } from './styles';

const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

const scoreTypes = {
  승: colors.indigo[800],
  패: colors.red[800],
  무: colors.gray[800],
};

export default function ConfirmTicket() {
  const {
    matchDate: { year, month, date },
    homeTeam,
    awayTeam,
    stadium,
    score,
    scoreType,
  } = useTicketForm();
  const matchDate = `${year}.${month}.${date}`;
  const matchDay = weekdays[new Date(year, month - 1, date).getDay()];
  const matchup = `${awayTeam && KBO_LEAGUE_TEAMS[awayTeam]} vs ${
    homeTeam && KBO_LEAGUE_TEAMS[homeTeam]
  }`;

  return (
    <div>
      <h3>티켓 정보</h3>
      <div css={styles.ticketWrapper}>
        <div css={styles.ticket}>
          <p css={styles.title}>{year} KBO 리그</p>
          <p css={styles.score}>
            <span>
              {score.awayTeam} : {score.homeTeam}
            </span>
            <em style={{ '--score-type': scoreTypes[scoreType] }}>
              {scoreType}
            </em>
          </p>
          <p
            css={styles.matchup}
            style={{ '--home-logo': `url('/images/team/${homeTeam}.png')` }}
          >
            {matchup}
          </p>
          <p css={styles.date}>
            {matchDate} ({matchDay})
          </p>
          <p css={styles.stadium}>{stadium}</p>
        </div>
      </div>
    </div>
  );
}
