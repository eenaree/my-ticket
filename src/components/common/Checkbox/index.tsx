import * as React from 'react';

interface Props {
  label?: string;
}

export default function Checkbox({
  label,
  ...props
}: React.ComponentPropsWithRef<'input'> & React.PropsWithChildren<Props>) {
  return (
    <label htmlFor={props.id}>
      <input type="checkbox" {...props} />
      {label && <span>{label}</span>}
    </label>
  );
}
