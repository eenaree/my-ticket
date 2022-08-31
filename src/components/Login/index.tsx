import Modal from '@components/common/Modal';

interface Props {
  modal: boolean;
}

export default function Login({ modal }: Props) {
  return (
    <Modal modal={modal}>
      <div>로그인 모달</div>
    </Modal>
  );
}
