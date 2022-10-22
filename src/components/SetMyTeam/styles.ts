import { css } from '@emotion/react';
import { mq } from '~/styles/mediaQueries';

export const styles = {
  matchTeams: css({
    display: 'flex',
    marginLeft: '-1rem',
    '> *': {
      flex: '0 1 50%',
      margin: '0 0 1rem 1rem',
      position: 'relative',
    },
  }),
  team: css({
    height: 150,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    em: {
      fontWeight: 600,
      fontSize: '1.4rem',
    },
    small: {
      position: 'absolute',
      top: '0.5rem',
      right: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: 600,
      [mq('xs')]: {
        top: '1rem',
        right: '1rem',
      },
    },
  }),
};
