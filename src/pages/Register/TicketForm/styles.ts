import { css } from '@emotion/react';

export const styles = {
  form: css({
    padding: 20,
    h2: {
      paddingBottom: '1rem',
      fontSize: '1.6rem',
      fontWeight: 600,
    },
    h3: {
      padding: '2rem 0',
      fontSize: '1.4rem',
      fontWeight: 600,
      textAlign: 'center',
    },
  }),
  formNavigation: css({
    margin: '1rem 0',
    display: 'flex',
    justifyContent: 'flex-end',
    button: {
      marginLeft: '1rem',
      '&:disabled': {
        opacity: '.5',
      },
    },
  }),
};
