import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';

export const styles = {
  inner: css({
    [mq('lg')]: {
      width: 1200,
      margin: '0 auto',
    },
  }),
};
