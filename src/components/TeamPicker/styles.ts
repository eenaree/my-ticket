import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';
import { colors } from '@styles/theme';

export const styles = {
  inner: css({
    padding: '10px 20px',
    backgroundColor: colors.gray[100],
    textAlign: 'center',
    h2: {
      fontSize: '1.6rem',
      fontWeight: 600,
    },
    [mq('lg')]: {
      width: 1200,
      margin: '0 auto',
    },
  }),
  modalWrapper: css({
    width: '100vw',
    height: '100vh',
    [mq('sm')]: {
      width: 700,
      height: 'auto',
    },
  }),
  modalHeader: css({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1.25rem',
    backgroundColor: colors.gray[300],
    borderRadius: '4px 4px 0 0',
    textAlign: 'center',
    h2: {
      fontFamily: 'UtoBalsamTint',
      fontWeight: 600,
      fontSize: '1.6rem',
    },
  }),
  closeButton: css({
    position: 'relative',
    top: 0,
    right: 0,
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: 3,
      height: 20,
      backgroundColor: colors.black,
      transform: 'rotate(-45deg)',
    },
    '&:after': {
      content: '""',
      display: 'block',
      width: 3,
      height: 20,
      backgroundColor: colors.black,
      transform: 'rotate(45deg)',
    },
  }),
  modalBody: css({
    padding: '1.25rem',
  }),
};
