import StadiumList from '@components/StadiumList';
import { styles } from './styles';

export default function StadiumPicker() {
  return (
    <section css={styles.wrapper}>
      <div css={styles.title}>
        <h2>구장 선택</h2>
        <p>소유한 티켓의 경기장을 선택하세요</p>
      </div>
      <StadiumList />
    </section>
  );
}
