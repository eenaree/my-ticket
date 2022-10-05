import { css } from '@emotion/react';
import { colors } from '@styles/theme';

export const styles = {
  radioButton: css({
    display: 'flex',
    input: {
      appearance: 'none',
      margin: 0,
      cursor: 'pointer',
      '&:checked': {
        '+ label': {
          borderColor: colors.indigo[300],
          background: colors.indigo[300],
          color: colors.white,
          fontWeight: 600,
        },
      },
      '&:disabled': {
        '+ label': {
          cursor: 'not-allowed',
          opacity: '.5',
        },
      },
    },
    label: {
      flex: '1 1 auto',
      padding: '1rem',
      border: `1px solid ${colors.gray[200]}`,
      borderRadius: 8,
      background: colors.white,
      boxShadow: '7px 7px 15px rgba(0,0,0,0.05)',
      textAlign: 'center',
      cursor: 'pointer',
      transition: '.5s',
    },
  }),
};
