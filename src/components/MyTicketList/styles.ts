import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';
import { colors } from '@styles/theme';

export const styles = {
  isEmpty: css({
    width: '100%',
    padding: '5rem 0',
    textAlign: 'center',
    fontSize: '1.4rem',
    fontWeight: 600,
    [mq('lg')]: {
      width: 1200,
      margin: '0 auto',
    },
  }),
  myTicketList: css({
    padding: '1rem',
    li: {
      margin: '0 auto 1rem',
      maxWidth: 360,
      position: 'relative',
      background: `${colors.white} var(--team-logo) no-repeat top 0.4rem right 0.5rem`,
      backgroundSize: '50px auto',
      border: `1px solid ${colors.gray[100]}`,
      borderRadius: 4,
      display: 'flex',
      flexDirection: 'column',
    },
    [mq('xs')]: {
      padding: 0,
      display: 'flex',
      flexWrap: 'wrap',
      li: {
        width: '50%',
        maxWidth: 'calc(50% - 2rem)',
        margin: '1rem',
      },
    },
    [mq('md')]: {
      li: {
        width: '33.33%',
        maxWidth: 'calc(33.33% - 2rem)',
      },
    },
    [mq('lg')]: {
      width: 1200,
      margin: '0 auto',
    },
  }),
  ticketTitle: css({
    height: 50,
    lineHeight: '50px',
    borderBottom: `2px dashed ${colors.gray[100]}`,
  }),
  date: css({
    marginLeft: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: 600,
  }),
  opponentTeam: css({
    '&:before': {
      content: '"vs"',
      margin: '0 0.3rem 0 0.5rem',
      fontSize: '0.875rem',
    },
  }),
  ticketInfo: css({
    position: 'relative',
    height: 80,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    em: {
      position: 'absolute',
      top: '-2px',
      left: 0,
      padding: '0.2rem 0.4rem 0.4rem',
      borderRadius: '0 0 4px 4px',
      color: colors.white,
      fontWeight: 600,
      fontSize: '0.9rem',
      textAlign: 'center',
    },
    [mq('md')]: {
      height: 160,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      em: {
        fontSize: '1.2rem',
      },
    },
  }),
  score: css({
    flex: '0 0 40%',
    textAlign: 'center',
    span: {
      fontSize: '3rem',
      fontWeight: 600,
    },
    'span:last-of-type': {
      color: colors.gray[600],
      '&:before': {
        content: '":"',
        position: 'relative',
        top: '-0.2rem',
        margin: '0 0.4rem',
        fontWeight: 400,
      },
    },
    [mq('md')]: {
      flex: '0 1 auto',
      span: {
        fontSize: '4rem',
      },
    },
  }),
  승: css({
    background: colors.indigo[600],
  }),
  패: css({
    background: colors.red[600],
  }),
  무: css({
    background: colors.gray[600],
  }),
  stadium: css({
    flex: '0 1 50%',
    fontWeight: 600,
    fontSize: '0.9rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '&:before': {
      content: '"장소"',
      display: 'block',
      margin: '0 0 0.4rem 0',
      fontWeight: 400,
      fontSize: '0.8rem',
    },
    [mq('md')]: {
      flex: '0 1 auto',
      fontSize: '1rem',
      '&:before': {
        display: 'inline-block',
        margin: '0 0.4rem 0 0',
        fontSize: 'inherit',
      },
    },
  }),
  ticketTags: css({
    borderTop: `1px solid ${colors.gray[100]}`,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    em: {
      padding: '0.2rem',
      borderRadius: 4,
      background: colors.gray[700],
      color: colors.white,
      fontWeight: 600,
      fontSize: '0.9rem',
      margin: '0.5rem 0 0.5rem 0.5rem',
    },
    [mq('md')]: {
      justifyContent: 'center',
      em: {
        fontSize: '1rem',
      },
    },
  }),
};
