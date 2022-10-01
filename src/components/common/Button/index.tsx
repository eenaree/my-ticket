import * as React from 'react';
import { colors } from '@styles/theme';
import { styles } from './styles';

interface Props {
  fullWidth?: boolean;
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
  fullWidth,
  bgColor,
  size = 'medium',
  ...props
}: React.PropsWithChildren<Props> & React.ComponentPropsWithRef<'button'>) {
  return (
    <button
      type="button"
      css={styles.button}
      style={{
        ['--button-width']: fullWidth ? '100%' : 'auto',
        ['--button-height']: sizes[size].height,
        ['--button-fontSize']: sizes[size].fontSize,
        ['--button-color']: bgColor ? colors.white : colors.black,
        ['--button-bg']: bgColor || 'transparent',
      }}
      {...props}
    >
      {children}
    </button>
  );
}
