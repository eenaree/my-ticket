import { Link } from 'react-router-dom';
import Button from '@components/common/Button';
import { styles } from './styles';

export default function Header() {
  function onClick() {
    console.log('버튼 클릭');
  }

  return (
    <div>
      <div css={styles.headerInner}>
        <h1 css={styles.logo}>
          <Link to="/">MyTicket</Link>
        </h1>
        <Button onClick={onClick}>로그인</Button>
      </div>
    </div>
  );
}
