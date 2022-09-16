import * as React from 'react';

interface Props {
  id?: string; // 'id' is missing in props validation 오류 구문 때문에 추가함
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
