import { useCallback, useEffect, useRef } from 'react';
import GoogleLoginIcon from '@assets/google-login.svg';
import KakaoLoginIcon from '@assets/kakao-login.svg';
import NaverLoginIcon from '@assets/naver-login.svg';
import Button from '@components/common/Button';
import { BASE_URL } from '@constants/global';
import { useModalStore } from '@store/.';
import { colors } from '@styles/theme';
import { User } from '@typings/db';
import { styles } from './styles';

interface Props {
  onSuccess(user: User): void;
}

interface ProviderProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onClickLogin: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  bgColor: string;
  color: string;
}

interface MessageData {
  from: string;
  user: User | null;
}

type Provider = typeof providers[number]['provider'];

const providers = [
  {
    provider: 'google',
    Icon: GoogleLoginIcon,
    text: '구글 계정으로 로그인',
    bgColor: colors.gray[100],
    color: colors.black,
  },
  {
    provider: 'kakao',
    Icon: KakaoLoginIcon,
    text: '카카오 계정으로 로그인',
    bgColor: '#fee500',
    color: colors.black,
  },
  {
    provider: 'naver',
    Icon: NaverLoginIcon,
    text: '네이버 아이디로 로그인',
    bgColor: '#03c75a',
    color: colors.white,
  },
] as const;

export default function Login({ onSuccess }: Props) {
  const closeModal = useModalStore(state => state.closeModal);
  const newWindowRef = useRef<Window | null>();
  const prevWindowUrlRef = useRef<string>();

  const receiveMessage = useCallback(
    (e: MessageEvent<MessageData>) => {
      if (e.origin != window.location.origin) return;

      // Chrome browser에서만 발생하는 문제
      // 계정 로그인 클릭 후, 같은 origin인 현재 window로부터 메세지가 한번 수신되는 문제가 발생함.
      // 메세지를 보낸 window가 인증 팝업창이 아닌 경우에는 메세지를 수신받지 않도록 함.
      if (e.source == newWindowRef.current) {
        if (e.data.from == 'authentication') {
          if (e.data.user) {
            onSuccess(e.data.user);
          } else {
            window.alert('로그인에 실패했습니다.');
          }
          newWindowRef.current?.close();
        }
      }
    },
    [onSuccess]
  );

  function onClickLogin(provider: Provider) {
    const left = document.body.offsetWidth / 2 - 250;
    const top = document.body.offsetHeight / 2 - 250;

    const url = `${BASE_URL}/auth/${provider}`;
    const target = 'authentication';
    const features = `left=${left},top=${top},width=500,height=500`;

    if (!newWindowRef.current || newWindowRef.current.closed) {
      newWindowRef.current = window.open(url, target, features);
    } else if (prevWindowUrlRef.current == url) {
      newWindowRef.current.focus();
    } else {
      newWindowRef.current = window.open(url, target, features);
      newWindowRef.current?.focus();
    }

    prevWindowUrlRef.current = url;
  }

  useEffect(() => {
    window.addEventListener('message', receiveMessage);
    return () => {
      window.removeEventListener('message', receiveMessage);
    };
  }, [receiveMessage]);

  return (
    <section css={styles.modalWrapper}>
      <div css={styles.modalHeader}>
        <h2>로그인</h2>
        <button css={styles.closeButton} onClick={closeModal} />
      </div>
      <div css={styles.modalBody}>
        <ul css={styles.providerList}>
          {providers.map(provider => (
            <LoginProvider
              key={provider.provider}
              Icon={provider.Icon}
              onClickLogin={() => onClickLogin(provider.provider)}
              bgColor={provider.bgColor}
              text={provider.text}
              color={provider.color}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

function LoginProvider({
  Icon,
  onClickLogin,
  bgColor,
  color,
  text,
}: ProviderProps) {
  return (
    <li>
      <Button
        onClick={onClickLogin}
        style={{ ['--provider-bg']: bgColor, ['--provider-color']: color }}
      >
        <Icon />
        <span>{text}</span>
      </Button>
    </li>
  );
}
