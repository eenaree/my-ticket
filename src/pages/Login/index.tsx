import { useCallback, useEffect, useRef } from 'react';
import GoogleLoginIcon from '@assets/google-login.svg';
import KakaoLoginIcon from '@assets/kakao-login.svg';
import NaverLoginIcon from '@assets/naver-login.svg';
import { BASE_URL } from '@constants/global';
import { User } from '@typings/db';
import { styles } from './styles';

interface Props {
  onSuccess(user: User): void;
}

interface ProviderProps {
  provider: Provider;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onClickLogin: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
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
  },
  {
    provider: 'kakao',
    Icon: KakaoLoginIcon,
    text: '카카오 계정으로 로그인',
  },
  {
    provider: 'naver',
    Icon: NaverLoginIcon,
    text: '네이버 아이디로 로그인',
  },
] as const;

export default function Login({ onSuccess }: Props) {
  const newWindowRef = useRef<Window | null>();
  const prevWindowUrlRef = useRef('');

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
    <main css={styles.wrapper}>
      <article css={styles.loginBox}>
        <h1 css={styles.logo}>MyTicket</h1>
        <ul>
          {providers.map(provider => (
            <LoginProvider
              key={provider.provider}
              provider={provider.provider}
              Icon={provider.Icon}
              onClickLogin={() => onClickLogin(provider.provider)}
              text={provider.text}
            />
          ))}
        </ul>
      </article>
    </main>
  );
}

function LoginProvider({ Icon, onClickLogin, text, provider }: ProviderProps) {
  return (
    <li css={styles.loginProvider}>
      <button onClick={onClickLogin} css={styles[provider]}>
        <Icon />
        <span>{text}</span>
      </button>
    </li>
  );
}
