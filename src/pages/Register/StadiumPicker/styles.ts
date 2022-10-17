import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';

export const styles = {
  wrapper: css({
    padding: '1.25rem',
    [mq('lg')]: {
      width: 1200,
      margin: '0 auto',
    },
  }),
  title: css({
    h2: {
      paddingBottom: '1rem',
      fontSize: '1.6rem',
      fontWeight: 600,
    },
    p: {
      paddingBottom: '2rem',
    },
  }),
};
