import { css } from '@emotion/react';

export const styles = {
  button: css({
    width: 'var(--button-width)',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    borderRadius: 4,
    color: 'var(--button-color)',
    backgroundColor: 'var(--button-bg)',
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
};
