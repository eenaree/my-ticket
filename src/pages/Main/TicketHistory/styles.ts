import { css } from '@emotion/react';
import { mq } from '~/styles/mediaQueries';
import { colors } from '~/styles/theme';

export const styles = {
  wrapper: css({
    minHeight: 'calc(100vh - 110px)',
    background: colors.gray[50],
    [mq('sm')]: {
      minHeight: 'calc(100vh - 135px)',
    },
    [mq('lg')]: {
      minHeight: 'calc(100vh - 145px)',
    },
  }),
  registerLink: css({
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    background: colors.indigo[300],
    color: colors.white,
    fontSize: '1.25rem',
    fontWeight: 600,
    boxShadow: '0 2px 6px rgba(0,0,0,0.4)',
    [mq('lg')]: {
      bottom: '1rem',
      left: 0,
      right: 0,
      width: 1200,
      margin: '0 auto',
      borderRadius: 4,
    },
  }),
};
