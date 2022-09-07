import { useEffect } from 'react';
import { login } from '@services/auth';

export default function Authenticated() {
  useEffect(() => {
    login()
      .then(res => {
        console.log(res.data);
        window.close();
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return <div>인증 성공</div>;
}
