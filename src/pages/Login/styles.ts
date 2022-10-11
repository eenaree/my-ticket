import { css } from '@emotion/react';
import { colors } from '@styles/theme';

export const styles = {
  wrapper: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    minHeight: '100vh',
    background: colors.gray[100],
  }),
  loginBox: css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '100%',
    maxWidth: 360,
    height: 400,
    margin: '0 1rem',
    padding: '1rem',
    background: colors.white,
    borderRadius: 4,
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  }),
  logo: css({
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'UtoBalsamTint, Pretendard, sans-serif',
    fontSize: '3rem',
    fontWeight: 600,
  }),
  loginProvider: css({
    margin: '1rem 0',
    button: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      padding: 0,
      borderRadius: 4,
      fontWeight: 600,
    },
    span: {
      flex: '1 1 auto',
    },
  }),
  google: css({
    background: colors.gray[100],
    color: colors.black,
  }),
  kakao: css({
    background: '#fee500',
    color: colors.black,
  }),
  naver: css({
    background: '#03c75a',
    color: colors.white,
  }),
};
