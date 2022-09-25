import { css, keyframes } from '@emotion/react';
import { mq } from '@styles/mediaQueries';
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
      backgroundColor: 'rgba(0,0,0,0.4)',
      animationName: modal ? modalFadeIn : modalFadeOut,
      animationDuration: '0.6s',
    }),
  modalContainer: (modal: boolean) =>
    css({
      display: 'flex',
      maxHeight: 'calc(100% - 1rem)',
      margin: '0.5rem',
      backgroundColor: colors.white,
      borderRadius: 4,
      animationName: modal ? modalBoxSlideDown : modalBoxSlideUp,
      animationDuration: '0.6s',
      [mq('xs')]: {
        maxWidth: 500,
        maxHeight: 'calc(100% - 16rem)',
        margin: '8rem auto',
      },
    }),
};
