import CustomLink from '~/components/CustomLink';
import { styles } from './styles';

export default function NavBar() {
  return (
    <nav css={styles.navList}>
      <CustomLink to="/">직관 히스토리</CustomLink>
      <CustomLink to="myteam">MY 팀</CustomLink>
    </nav>
  );
}
