import { css } from '@emotion/react';
import { colors } from '@styles/theme';

export const styles = {
  button: css({
    width: 'var(--button-width)',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    borderRadius: 4,
    fontWeight: 600,
    '&:disabled': {
      cursor: 'not-allowed',
    },
  }),
  small: css({
    height: '1.5rem',
    fontSize: '.875rem',
  }),
  medium: css({
    height: '2.25rem',
    fontSize: '1rem',
  }),
  large: css({
    height: '3rem',
    fontSize: '1.25rem',
  }),
  primary: css({
    background: colors.indigo[600],
    color: colors.white,
    border: `1px solid ${colors.indigo[600]}`,
  }),
  secondary: css({
    background: colors.white,
    color: colors.indigo[600],
    border: `1px solid ${colors.gray[200]}`,
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
  }),
  basic: css({
    background: 'transparent',
    color: colors.black,
    border: 'none',
  }),
};
