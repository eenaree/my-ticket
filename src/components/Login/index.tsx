import GoogleLoginIcon from '@assets/google-login.svg';
import KakaoLoginIcon from '@assets/kakao-login.svg';
import NaverLoginIcon from '@assets/naver-login.svg';
import Button from '@components/common/Button';
import Modal from '@components/common/Modal';
import { useModalDispatch } from '@context/ModalContext';
import { baseURL } from '@services/index';
import { styles } from './styles';

interface Props {
  modal: boolean;
}

interface LoginProps {
  onClickLogin: React.MouseEventHandler<HTMLButtonElement>;
}

type Provider = 'google' | 'kakao' | 'naver';

export default function Login({ modal }: Props) {
  const modalDispatch = useModalDispatch();

  function closeModal() {
    modalDispatch({ type: 'CLOSE_MODAL' });
  }

  function onClickLogin(provider: Provider) {
    const left = window.screen.width / 2 - 300;
    const top = window.screen.height / 2 - 300;

    window.open(
      `${baseURL}/auth/${provider}`,
      `${provider}Login`,
      `left=${left},top=${top},width=600,height=600`
    );
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
            <GoogleLogin onClickLogin={() => onClickLogin('google')} />
            <KakaoLogin onClickLogin={() => onClickLogin('kakao')} />
            <NaverLogin onClickLogin={() => onClickLogin('naver')} />
          </ul>
        </div>
      </section>
    </Modal>
  );
}

function GoogleLogin({ onClickLogin }: LoginProps) {
  return (
    <li css={styles.googleLogin}>
      <Button onClick={onClickLogin}>
        <GoogleLoginIcon />
        <span>구글 계정으로 로그인</span>
      </Button>
    </li>
  );
}

function KakaoLogin({ onClickLogin }: LoginProps) {
  return (
    <li css={styles.kakaoLogin}>
      <Button onClick={onClickLogin}>
        <KakaoLoginIcon />
        <span>카카오 계정으로 로그인</span>
      </Button>
    </li>
  );
}

function NaverLogin({ onClickLogin }: LoginProps) {
  return (
    <li css={styles.naverLogin}>
      <Button onClick={onClickLogin}>
        <NaverLoginIcon />
        <span>네이버 아이디로 로그인</span>
      </Button>
    </li>
  );
}
