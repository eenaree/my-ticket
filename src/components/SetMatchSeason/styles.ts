import { css } from '@emotion/react';

export const styles = {
  wrapper: css({
    h3: {
      padding: '1rem 0',
    },
  }),
  radioButtonWrapper: css({
    display: 'flex',
    marginLeft: '-1rem',
    '> div': {
      flex: '0 1 50%',
      margin: '0 0 1rem 1rem',
    },
  }),
};
