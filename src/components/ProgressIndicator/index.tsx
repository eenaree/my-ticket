import { colors } from '~/styles/theme';
import { styles } from './styles';

interface Props {
  step: number;
  stepTitles: string[];
}

export default function ProgressIndicator({ step, stepTitles }: Props) {
  const progressWidth =
    step == stepTitles.length
      ? '100%'
      : `${(step - 1) * (100 / (stepTitles.length - 1))}%`;

  return (
    <div css={styles.progressIndicator}>
      <div
        css={styles.progressBar}
        style={{ '--progress-width': progressWidth }}
      />
      {stepTitles.map((title, index) => (
        <div
          key={title}
          css={styles.progressBullet}
          style={{
            '--bullet-bg':
              index + 1 < step ? colors.indigo[300] : colors.indigo[50],
            '--bullet-border':
              index + 1 <= step
                ? `2px solid ${colors.indigo[300]}`
                : '2px solid transparent',
          }}
          data-title={title}
        />
      ))}
    </div>
  );
}
