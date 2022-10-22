import { css } from '@emotion/react';
import { colors } from '~/styles/theme';

export const styles = {
  radioButton: css({
    display: 'flex',
    input: {
      appearance: 'none',
      margin: 0,
      cursor: 'pointer',
      '&:checked': {
        '+ label': {
          border: `2px solid ${colors.indigo[300]}`,
          background: colors.indigo[50],
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
      minHeight: 60,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: `1px solid ${colors.gray[200]}`,
      borderRadius: 8,
      background: colors.white,
      boxShadow: '7px 7px 15px rgba(0,0,0,0.05)',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'background .5s',
    },
  }),
};
