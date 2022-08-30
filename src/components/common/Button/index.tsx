import * as React from 'react';
import { colors } from '@styles/theme';
import { styles } from './styles';

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  bgColor?: string;
  size?: keyof typeof sizes;
}

const sizes = {
  small: {
    height: '1.5rem',
    fontSize: '.875rem',
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem',
  },
  large: {
    height: '3rem',
    fontSize: '1.25rem',
  },
} as const;

export default function Button({
  children,
  onClick,
  bgColor,
  size = 'medium',
}: React.PropsWithChildren<Props>) {
  return (
    <button
      onClick={onClick}
      css={styles.button}
      style={{
        ['--button-height']: sizes[size].height,
        ['--button-fontSize']: sizes[size].fontSize,
        ['--button-color']: bgColor ? colors.white : colors.black,
        ['--button-bg']: bgColor || 'transparent',
      }}
    >
      {children}
    </button>
  );
}
