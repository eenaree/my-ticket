import { useEffect, useState } from 'react';
import CustomLink from '~/components/CustomLink';
import useElementRect from '~/hooks/useElementRect';
import { styles } from './styles';

export default function NavBar() {
  const [sticky, setSticky] = useState(false);
  const [navRectRef, setNavRectRef] = useElementRect();

  useEffect(() => {
    function handleScroll() {
      if (navRectRef.current) {
        navRectRef.current.y < window.scrollY
          ? setSticky(true)
          : setSticky(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav css={[styles.navList, sticky && styles.sticky]} ref={setNavRectRef}>
      <div>
        <CustomLink to="/">직관 히스토리</CustomLink>
        <CustomLink to="myteam">MY 팀</CustomLink>
      </div>
    </nav>
  );
}
