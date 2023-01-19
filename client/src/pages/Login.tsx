import { useCallback, useEffect, useRef, useState } from 'react';
import axios from '../axios';
import GoogleButton from '../components/GoogleBtn';

function Login() {
  const [id, setId] = useState('');

  const initialization = useCallback(async () => {
    const res = await axios.get('/self-service/login/browser', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });

    console.log(res);

    setId(res.data.id);
  }, [setId]);

  const calledOnce = useRef(false);

  useEffect(() => {
    if (calledOnce.current) {
      return;
    }
    if (!id) {
      initialization();

      calledOnce.current = true;
    }
  }, [id, initialization]);

  const signIn = async () => {
    try {
      await axios.post(
        '/self-service/login',
        {
          method: 'oidc',
          provider: 'google',
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
          params: { flow: id },
        }
      );
    } catch (error) {
      console.log((error as any).response.data.redirect_browser_to);

      window.location = (error as any).response.data.redirect_browser_to;
    }
  };

  return (
    <div className="container_login">
      <h1>Please Sign In</h1>
      <GoogleButton onClick={signIn} />
    </div>
  );
}

export default Login;
