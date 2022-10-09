import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';
import { colors } from '@styles/theme';

export const styles = {
  progressIndicator: css({
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '1rem 0',
    counterReset: 'step',
    '&:before': {
      zIndex: '-1',
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      height: 4,
      width: '100%',
      background: colors.indigo[50],
    },
    [mq('sm')]: {
      margin: '1rem 0 2rem',
    },
  }),
  progressBar: css({
    zIndex: '-1',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    height: 4,
    width: 'var(--progress-width)',
    background: colors.indigo[300],
    transition: '.5s',
  }),
  progressBullet: css({
    position: 'relative',
    width: 25,
    height: 25,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'var(--bullet-bg)',
    border: 'var(--bullet-border)',
    color: colors.white,
    fontSize: '1rem',
    transition: '.5s',
    '&:before': {
      counterIncrement: 'step',
      content: 'counter(step)',
    },
    '&:after': {
      display: 'none',
      content: 'attr(data-title)',
      position: 'absolute',
      top: 'calc(100% + 1rem)',
      width: 'calc(100% + 2rem)',
      textAlign: 'center',
      color: colors.black,
      fontSize: '0.875rem',
    },
    [mq('sm')]: {
      width: 40,
      height: 40,
      fontSize: '1.6rem',
      '&:after': {
        display: 'block',
      },
    },
  }),
};
