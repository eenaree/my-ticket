import { styles } from './styles';

interface RadioButtonProps {
  label?: React.ReactNode;
}

export default function RadioButton({
  label,
  ...props
}: React.ComponentPropsWithRef<'input'> & RadioButtonProps) {
  return (
    <div key={props.key} css={styles.radioButton}>
      <input type="radio" {...props} />
      <label htmlFor={props.id}>{label}</label>
    </div>
  );
}
