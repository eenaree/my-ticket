import GoogleLoginIcon from '@assets/google-login.svg';
import KakaoLoginIcon from '@assets/kakao-login.svg';
import NaverLoginIcon from '@assets/naver-login.svg';
import Button from '@components/common/Button';
import Modal from '@components/common/Modal';
import { useModalDispatch } from '@context/ModalContext';
import { styles } from './styles';

interface Props {
  modal: boolean;
}

export default function Login({ modal }: Props) {
  const modalDispatch = useModalDispatch();

  function closeModal() {
    modalDispatch({ type: 'CLOSE_MODAL' });
  }

  return (
    <Modal modal={modal}>
      <section css={styles.modalWrapper}>
        <div css={styles.modalHeader}>
          <h2>로그인</h2>
          <button css={styles.closeButton} onClick={closeModal} />
        </div>
        <div css={styles.modalBody}>
          <ul>
            <GoogleLogin />
            <KakaoLogin />
            <NaverLogin />
          </ul>
        </div>
      </section>
    </Modal>
  );
}

function GoogleLogin() {
  return (
    <li css={styles.googleLogin}>
      <Button>
        <GoogleLoginIcon />
        <span>구글 계정으로 로그인</span>
      </Button>
    </li>
  );
}

function KakaoLogin() {
  return (
    <li css={styles.kakaoLogin}>
      <Button>
        <KakaoLoginIcon />
        <span>카카오 계정으로 로그인</span>
      </Button>
    </li>
  );
}

function NaverLogin() {
  return (
    <li css={styles.naverLogin}>
      <Button>
        <NaverLoginIcon />
        <span>네이버 아이디로 로그인</span>
      </Button>
    </li>
  );
}
