import * as React from 'react';
import { styles } from './styles';

interface Props {
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'basic';
}

export default function Button({
  children,
  fullWidth,
  size = 'medium',
  variant = 'basic',
  ...props
}: React.PropsWithChildren<Props> & React.ComponentPropsWithRef<'button'>) {
  return (
    <button
      type="button"
      css={[styles.button, styles[size], styles[variant]]}
      style={{
        ['--button-width']: fullWidth ? '100%' : 'auto',
      }}
      {...props}
    >
      {children}
    </button>
  );
}
