import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';

export const styles = {
  inner: css({
    padding: 20,
    [mq('lg')]: {
      width: 1200,
      margin: '0 auto',
    },
  }),
  title: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    h2: {
      fontSize: '1.6rem',
      fontWeight: 600,
    },
  }),
};
