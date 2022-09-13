import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';

export const styles = {
  teamList: css({
    display: 'flex',
    flexWrap: 'wrap',
  }),
  teamBox: css({
    width: '50%',
    height: 150,
    textAlign: 'center',
    backgroundImage: 'var(--team-logo)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    fontWeight: 600,
    [mq('sm')]: {
      width: '20%',
    },
  }),
};
