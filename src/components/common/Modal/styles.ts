import { css, keyframes } from '@emotion/react';
import { colors } from '@styles/theme';

const modalFadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const modalFadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const modalBoxSlideDown = keyframes({
  from: { transform: 'translateY(-50px)' },
  to: { transform: 'translateY(0)' },
});

const modalBoxSlideUp = keyframes({
  from: { transform: 'translateY(0)' },
  to: { transform: 'translateY(-50px)' },
});

export const styles = {
  modalOverlay: (modal: boolean) =>
    css({
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.4)',
      animationName: modal ? modalFadeIn : modalFadeOut,
      animationDuration: '0.6s',
    }),
  modalContainer: (modal: boolean) =>
    css({
      backgroundColor: colors.white,
      padding: '1.25rem',
      borderRadius: 4,
      animationName: modal ? modalBoxSlideDown : modalBoxSlideUp,
      animationDuration: '0.6s',
    }),
};
