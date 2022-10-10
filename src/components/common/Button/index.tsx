import * as React from 'react';
import { colors } from '@styles/theme';
import { styles } from './styles';

interface Props {
  fullWidth?: boolean;
  bgColor?: string;
  size?: 'small' | 'medium' | 'large';
}

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
      css={[styles.button, styles[size]]}
      style={{
        ['--button-width']: fullWidth ? '100%' : 'auto',
        ['--button-color']: bgColor ? colors.white : colors.black,
        ['--button-bg']: bgColor || 'transparent',
      }}
      {...props}
    >
      {children}
    </button>
  );
}
