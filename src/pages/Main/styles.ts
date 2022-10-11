import { css } from '@emotion/react';
import { colors } from '@styles/theme';

export const styles = {
  title: css({
    padding: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    h2: {
      fontSize: '1.6rem',
      fontWeight: 600,
    },
  }),
  registerLink: css({
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 60,
    lineHeight: '60px',
    textAlign: 'center',
    background: colors.indigo[300],
    color: colors.white,
    fontSize: '1.25rem',
    fontWeight: 600,
  }),
};
