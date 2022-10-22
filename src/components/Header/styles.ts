import { css } from '@emotion/react';
import { mq } from '~/styles/mediaQueries';

export const styles = {
  headerInner: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    [mq('sm')]: {
      height: 85,
    },
    [mq('lg')]: {
      width: 1200,
      margin: '0 auto',
    },
  }),
  logo: css({
    padding: '0 1rem',
    fontFamily: 'UtoBalsamTint, Pretendard, sans-serif',
    fontSize: '2rem',
    fontWeight: 700,
    [mq('xs')]: {
      fontSize: '2.5rem',
    },
  }),
};
