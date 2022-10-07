import { KBO_LEAGUE_TEAMS } from '@constants/global';
import {
  useTicketForm,
  useTicketFormDispatch,
} from '@context/TicketFormContext';
import { TeamId } from '@typings/db';
import { styles } from './styles';

interface ScordBoardProp {
  team: TeamId;
  score: number;
  onChangeTeamScore: React.ChangeEventHandler;
}

export default function SetMatchScore() {
  const { homeTeam, awayTeam, score } = useTicketForm();
  const ticketFormDispatch = useTicketFormDispatch();

  function onChangeAwayTeamScore(e: React.ChangeEvent<HTMLInputElement>) {
    const score = +e.target.value;
    if (isNaN(score) || score > 99) return;
    ticketFormDispatch({ type: 'SET_AWAYTEAM_SCORE', score });
  }

  function onChangeHomeTeamScore(e: React.ChangeEvent<HTMLInputElement>) {
    const score = +e.target.value;
    if (isNaN(score) || score > 99) return;
    ticketFormDispatch({ type: 'SET_HOMETEAM_SCORE', score });
  }

  if (!(homeTeam && awayTeam)) return null;

  return (
    <div css={styles.wrapper}>
      <h3>경기 결과를 입력하세요</h3>
      <div css={styles.scoreBoardWrapper}>
        <ScoreBoard
          team={awayTeam}
          score={score.awayTeam}
          onChangeTeamScore={onChangeAwayTeamScore}
        />
        <ScoreBoard
          team={homeTeam}
          score={score.homeTeam}
          onChangeTeamScore={onChangeHomeTeamScore}
        />
      </div>
    </div>
  );
}

function ScoreBoard({ team, score, onChangeTeamScore }: ScordBoardProp) {
  return (
    <div css={styles.scoreBoard}>
      <input type="text" id={team} value={score} onChange={onChangeTeamScore} />
      <label htmlFor={team}>
        <img src={`/images/team/${team}.png`} alt={KBO_LEAGUE_TEAMS[team]} />
        <span>{KBO_LEAGUE_TEAMS[team]}</span>
      </label>
    </div>
  );
}
