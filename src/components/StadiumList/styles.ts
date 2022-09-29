import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';
import { colors } from '@styles/theme';

export const styles = {
  stadiumSelect: css({
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '-1rem',
    li: {
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      [mq('md')]: {
        width: '20%',
      },
    },
    span: {
      height: 140,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'end',
      border: `1px solid ${colors.gray[100]}`,
      borderRadius: 4,
      background: `var(--team-logo) no-repeat 50% 0.5rem`,
      backgroundSize: '50px 40px',
      margin: '0 0 1rem 1rem',
      fontWeight: 600,
      [mq('sm')]: {
        height: 240,
        backgroundPosition: '50% 1.5rem',
        backgroundSize: 'auto',
      },
    },
    em: {
      padding: '0.2rem',
      margin: '0.1rem 0.5rem',
      border: `1px solid ${colors.gray[100]}`,
      textAlign: 'center',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontSize: '.875rem',
      [mq('sm')]: {
        padding: '0.5rem',
        margin: '0.1rem 1rem',
      },
    },
    'em:first-of-type': {
      display: 'none',
      [mq('sm')]: {
        display: 'block',
      },
    },
    a: {
      padding: '0.5rem',
      margin: '0.5rem',
      borderRadius: 4,
      backgroundColor: colors.gray[100],
      textAlign: 'center',
      fontSize: '.875rem',
      [mq('sm')]: {
        margin: '0.5rem 1rem 1rem',
        fontSize: '1rem',
      },
    },
  }),
};
