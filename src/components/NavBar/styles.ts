import { css } from '@emotion/react';
import { mq } from '~/styles/mediaQueries';
import { colors } from '~/styles/theme';

export const styles = {
  navList: css({
    width: '100%',
    display: 'flex',
    borderBottom: `1px solid ${colors.gray[100]}`,
    a: {
      width: '50%',
      height: 50,
      lineHeight: '50px',
      textAlign: 'center',
      fontSize: '1.2rem',
      fontWeight: 600,
      background: colors.white,
    },
    [mq('xs')]: {
      a: {
        fontSize: '1.4rem',
      },
    },
    [mq('md')]: {
      a: {
        height: 60,
        lineHeight: '60px',
        fontSize: '1.6rem',
      },
    },
    [mq('lg')]: {
      width: 1200,
      margin: '0 auto',
    },
  }),
};
