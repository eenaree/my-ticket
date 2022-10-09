import { css } from '@emotion/react';
import { colors } from '@styles/theme';

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
    button: {
      flex: '1 1 50%',
      width: '100%',
      '&:disabled': {
        opacity: '.5',
        background: 'none',
        color: colors.gray[600],
        border: `1px solid ${colors.gray[300]}`,
      },
    },
  }),
};
