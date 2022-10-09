import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';
import { colors } from '@styles/theme';

export const styles = {
  scoreBoardWrapper: css({
    [mq('sm')]: {
      display: 'flex',
      marginLeft: '-1rem',
    },
  }),
  scoreBoard: css({
    display: 'flex',
    marginBottom: '1rem',
    label: {
      order: 1,
      flexBasis: '70%',
      display: 'flex',
      alignItems: 'center',
      fontWeight: 600,
      fontSize: '1.4rem',
      background: colors.gray[50],
      borderRadius: '8px 0 0 8px',
      img: {
        margin: '0 1rem 0 0.5rem',
        width: 60,
      },
    },
    input: {
      height: 90,
      order: 2,
      flexBasis: '30%',
      width: '100%',
      padding: 0,
      border: `1px solid ${colors.gray[100]}`,
      borderWidth: '1px 1px 1px 0',
      borderRadius: '0 8px 8px 0',
      textAlign: 'center',
      fontSize: '3rem',
      fontWeight: 600,
      outline: 'none',
    },
    [mq('sm')]: {
      flex: '0 1 50%',
      margin: '0 0 1rem 1rem',
      flexDirection: 'column',
      label: {
        height: 60,
        order: 2,
        flexBasis: 'auto',
        justifyContent: 'center',
        borderRadius: '0 0 8px 8px',
        img: {
          margin: '0 1rem 0 0',
        },
      },
      input: {
        order: 1,
        flexBasis: 'auto',
        borderWidth: '1px 1px 0 1px',
        borderRadius: '8px 8px 0 0',
      },
    },
  }),
};
