import { css } from '@emotion/react';
import { mq } from '~/styles/mediaQueries';
import { colors } from '~/styles/theme';

export const styles = {
  ticketWrapper: css({
    padding: '2rem 0.5rem',
    borderRadius: 4,
    background: colors.gray[100],
  }),
  ticket: css({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    background: colors.white,
    borderRadius: 8,
    '&:before, &:after': {
      zIndex: 10,
      content: '""',
      position: 'absolute',
      top: 50,
      border: `10px solid ${colors.gray[100]}`,
      transform: 'rotate(-45deg)',
    },
    '&:before': {
      left: '-10px',
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
    },
    '&:after': {
      right: '-10px',
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent',
    },
    '> p': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    [mq('xs')]: {
      maxWidth: 300,
      margin: '0 auto',
    },
  }),
  title: css({
    height: 60,
    fontWeight: 600,
    borderBottom: `4px dotted ${colors.gray[300]}`,
  }),
  score: css({
    '> *': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    span: {
      height: 120,
      fontSize: '3.6rem',
      fontWeight: 600,
    },
    em: {
      transform: 'translateY(-50%)',
      width: 30,
      height: 30,
      background: 'var(--score-type)',
      color: colors.white,
      borderRadius: '50%',
    },
  }),
  matchup: css({
    position: 'relative',
    height: 60,
    fontSize: '1.4rem',
    fontWeight: 600,
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'var(--home-logo)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      opacity: '.2',
    },
  }),
  date: css({
    height: 60,
    fontSize: '1.2rem',
  }),
  stadium: css({
    height: 60,
    color: colors.gray[600],
    '&:before': {
      content: '""',
      width: 200,
      height: 1,
      transform: 'translateY(-1rem)',
      background: colors.gray[300],
    },
  }),
};
