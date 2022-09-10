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
  }),
  providerList: css({
    li: {
      margin: '1.25rem 0',
      borderRadius: 4,
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      padding: 0,
      backgroundColor: 'var(--provider-bg)',
      color: 'var(--provider-color)',
    },
    span: {
      flex: '1 1 auto',
    },
  }),
};
