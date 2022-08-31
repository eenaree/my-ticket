import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';
import { colors } from '@styles/theme';

export const styles = {
  modalWrapper: css({
    width: '100vw',
    height: '100vh',
    [mq('xs')]: {
      width: 360,
      height: 'auto',
    },
  }),
  modalHeader: css({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: colors.gray[300],
    borderRadius: '4px 4px 0 0',
    padding: '1.25rem',
    h2: {
      fontFamily: 'UtoBalsamTint',
      fontWeight: 600,
      fontSize: '1.6rem',
    },
  }),
  closeButton: css({
    position: 'relative',
    height: 'auto',
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
    li: {
      margin: '1.25rem 0',
      padding: '0.5rem 0',
      borderRadius: 4,
    },
    button: css({
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      padding: 0,
    }),
    span: css({
      flex: '1 1 auto',
    }),
  }),
  kakaoLogin: css({
    backgroundColor: '#fee500',
  }),
  naverLogin: css({
    backgroundColor: '#03c75a',
    button: css({
      color: colors.white,
    }),
  }),
  googleLogin: css({
    backgroundColor: colors.gray[100],
  }),
};
