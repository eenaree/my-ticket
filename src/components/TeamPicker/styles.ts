import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';
import { colors } from '@styles/theme';

export const styles = {
  modalWrapper: css({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 4,
    [mq('xs')]: {
      width: 500,
      margin: 'auto',
    },
  }),
  modalHeader: css({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
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
    padding: '1rem',
    overflowY: 'auto',
  }),
};
