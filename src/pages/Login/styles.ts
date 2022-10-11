import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';
import { colors } from '@styles/theme';

export const styles = {
  modalWrapper: css({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: 'auto 0.5rem',
    backgroundColor: colors.white,
    borderRadius: 4,
    [mq('xs')]: {
      width: 360,
      margin: 'auto',
      maxHeight: 'calc(100% - 4rem)',
    },
  }),
  modalHeader: css({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: colors.gray[300],
    borderRadius: '4px 4px 0 0',
    padding: '1rem',
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
    padding: '1rem',
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
