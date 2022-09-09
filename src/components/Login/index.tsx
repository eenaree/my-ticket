import { useEffect, useRef } from 'react';
import GoogleLoginIcon from '@assets/google-login.svg';
import KakaoLoginIcon from '@assets/kakao-login.svg';
import NaverLoginIcon from '@assets/naver-login.svg';
import Button from '@components/common/Button';
import Modal from '@components/common/Modal';
import { useModalDispatch } from '@context/ModalContext';
import { baseURL } from '@services/index';
import { User } from '@typings/db';
import { styles } from './styles';

interface Props {
  modal: boolean;
}

interface LoginProps {
  onClickLogin: React.MouseEventHandler<HTMLButtonElement>;
}

interface MessageData {
  authenticated: boolean;
  user: User | null;
}

type Provider = 'google' | 'kakao' | 'naver';

export default function Login({ modal }: Props) {
  const modalDispatch = useModalDispatch();
  const newWindowRef = useRef<Window | null>();
  const prevWindowTargetRef = useRef<string>();

  function closeModal() {
    modalDispatch({ type: 'CLOSE_MODAL' });
  }

  function receiveMessage(e: MessageEvent<MessageData>) {
    // 팝업창으로부터 메세지를 수신받아 로그인 처리
    if (e.origin != window.location.origin) return;
    if (newWindowRef.current) {
      if (e.data.authenticated && e.data.user) {
        console.log('user', e.data.user);
      } else {
        window.alert('로그인에 실패했습니다.');
      }
      newWindowRef.current.close();
      newWindowRef.current = null; // 로그인 성공 후에도, 실패 메세지 코드 블록이 실행되는 버그가 발생하여 이를 방지하기 위한 코드
    }
  }

  function onClickLogin(provider: Provider) {
    const left = window.screen.width / 2 - 300;
    const top = window.screen.height / 2 - 300;

    const url = `${baseURL}/auth/${provider}`;
    const target = `${provider}Login`;
    const features = `left=${left},top=${top},width=600,height=600`;

    if (!newWindowRef.current || newWindowRef.current.closed) {
      newWindowRef.current = window.open(url, target, features);
    } else if (prevWindowTargetRef.current == target) {
      newWindowRef.current.focus();
    } else {
      newWindowRef.current.close();
      newWindowRef.current = window.open(url, target, features);
      newWindowRef.current?.focus();
    }

    prevWindowTargetRef.current = target;

    window.removeEventListener('message', receiveMessage);
    window.addEventListener('message', receiveMessage);
  }

  useEffect(() => {
    return () => {
      window.removeEventListener('message', receiveMessage);
    };
  }, []);

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
