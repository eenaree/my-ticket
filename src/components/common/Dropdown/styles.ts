import { css } from '@emotion/react';
import { colors } from '~/styles/theme';

export const styles = {
  dropdownWrapper: css({
    position: 'relative',
    width: 'var(--dropdown-width)',
  }),
  toggleButton: (visible: boolean) =>
    css({
      position: 'relative',
      width: '100%',
      borderRadius: 6,
      boxShadow: '1px 1px 10px rgba(0,0,0,0.1)',
      textAlign: 'inherit',
      height: 40,
      padding: '0 1rem',
      '&:disabled': {
        opacity: '.5',
        cursor: 'not-allowed',
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        right: '1rem',
        padding: 3,
        border: `solid ${colors.black}`,
        borderWidth: '0 0 2px 2px',
        transform: visible
          ? 'rotate(135deg)'
          : 'rotate(-45deg) translateY(-50%)',
        transition: '.5s',
      },
    }),
  dropdownList: (visible: boolean) =>
    css({
      zIndex: 100,
      position: 'absolute',
      top: 45,
      left: 0,
      width: '100%',
      height: 200,
      overflowY: 'auto',
      visibility: visible ? 'visible' : 'hidden',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(-20px)',
      transition: '.5s',
      boxShadow: '1px 1px 10px rgba(0,0,0,0.1)',
      borderRadius: 6,
      background: colors.white,
      button: {
        width: '100%',
        height: 40,
        padding: '0 1rem',
        textAlign: 'inherit',
      },
    }),
  value: (selected: boolean) =>
    css({
      background: selected ? colors.gray[100] : 'transparent',
      fontWeight: selected ? 600 : 400,
    }),
};
