import {
  Link,
  type LinkProps,
  useMatch,
  useResolvedPath,
} from 'react-router-dom';
import { styles } from './styles';

export default function CustomLink({
  to,
  children,
  ...props
}: React.PropsWithChildren<LinkProps>) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      css={[styles.common, match ? styles.active : styles.noneActive]}
      {...props}
    >
      {children}
    </Link>
  );
}
