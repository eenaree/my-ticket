import { css, keyframes } from '@emotion/react';
import { colors } from '~/styles/theme';

const fadeIn = keyframes({
  from: { bottom: 0, opacity: 0 },
  to: { bottom: 40, opacity: 1 },
});

const fadeOut = keyframes({
  from: { bottom: 40, opacity: 1 },
  to: { bottom: 0, opacity: 0 },
});

export const styles = {
  snackbar: (visible: boolean) =>
    css({
      visibility: visible ? 'visible' : 'hidden',
      zIndex: 100,
      position: 'fixed',
      bottom: 40,
      left: '50%',
      transform: 'translateX(-50%)',
      animation: visible ? `${fadeIn} .5s, ${fadeOut} .5s 3s` : undefined,
      width: '90%',
      maxWidth: 300,
      margin: '0 auto',
      padding: '1rem',
      borderRadius: 4,
      background: 'rgba(0,0,0,0.6)',
      color: colors.white,
      textAlign: 'center',
    }),
};
