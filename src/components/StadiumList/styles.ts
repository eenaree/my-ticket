import { css } from '@emotion/react';
import { mq } from '~/styles/mediaQueries';
import { colors } from '~/styles/theme';

export const styles = {
  stadiumList: css({
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '-1rem',
    li: {
      maxWidth: 'calc(50% - 1rem)',
      width: '50%',
      height: 160,
      padding: 10,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      borderRadius: 8,
      background: `${colors.white} var(--team-logo) no-repeat 50% 1rem`,
      backgroundSize: '50px 40px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
      margin: '0 0 1rem 1rem',
      fontWeight: 600,
    },
    em: {
      height: 30,
      lineHeight: '30px',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontSize: '.875rem',
      '&:first-of-type': {
        display: 'none',
        height: 40,
        '&:after': {
          content: '""',
          display: 'block',
          width: 80,
          height: 1,
          margin: '0 auto',
          transform: 'translateY(5px)',
          background: colors.gray[300],
        },
      },
      '& + em': {
        margin: '0.5rem 0',
      },
    },
    a: {
      height: 40,
      lineHeight: '40px',
      textAlign: 'center',
      borderRadius: 4,
      background: colors.gray[100],
    },
    [mq('xs')]: {
      li: {
        maxWidth: 'calc(33.3% - 1rem)',
        width: '33.3%',
        height: 240,
        backgroundPosition: '50% 1.5rem',
        backgroundSize: 'auto',
      },
      em: {
        '&:first-of-type': {
          display: 'block',
        },
      },
    },
    [mq('md')]: {
      li: {
        maxWidth: 'calc(20% - 1rem)',
        width: '20%',
      },
    },
  }),
};
