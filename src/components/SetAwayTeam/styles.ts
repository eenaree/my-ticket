import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';
import { colors } from '@styles/theme';

export const styles = {
  wrapper: css({
    h3: {
      padding: '1rem 0',
    },
  }),
  matchup: css({
    display: 'flex',
    marginLeft: '-1rem',
    '> div': {
      position: 'relative',
      height: 150,
      flex: '0 1 50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      background: colors.gray[50],
      borderRadius: 8,
      padding: '1rem',
      margin: '0 0 1rem 1rem',
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
    },
  }),
  awayTeamList: css({
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '-0.5rem',
    '> div': {
      flex: '0 1 33.3%',
      margin: '0 0 0.5rem 0.5rem',
      maxWidth: 'calc(33.3% - 0.5rem)',
    },
    [mq('md')]: {
      flexWrap: 'nowrap',
    },
  }),
};
