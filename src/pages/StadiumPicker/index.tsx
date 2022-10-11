import StadiumList from '@components/StadiumList';
import { useModalStore } from '@store/.';
import { styles } from './styles';

export default function StadiumPicker() {
  const closeModal = useModalStore(state => state.closeModal);

  return (
    <section css={styles.modalWrapper}>
      <div css={styles.modalHeader}>
        <h2>구장을 선택하세요</h2>
        <button css={styles.closeButton} onClick={closeModal} />
      </div>
      <div css={styles.modalBody}>
        <StadiumList />
      </div>
    </section>
  );
}
