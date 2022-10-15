import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';
import { colors } from '@styles/theme';

export const styles = {
  registerLink: css({
    position: 'fixed',
    bottom: '1rem',
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: '90%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 4,
    background: colors.indigo[300],
    color: colors.white,
    fontSize: '1.25rem',
    fontWeight: 600,
    [mq('lg')]: {
      width: 1200,
    },
  }),
};
