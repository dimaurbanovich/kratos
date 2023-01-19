import axios from '../axios';
import { useState } from 'react';

function Welcome() {
  const [identity, setIdentity] = useState(null);

  const getIdentity = async () => {
    try {
      const res = await axios.get(`/sessions/whoami`, {
        withCredentials: true,
      });

      console.log(res);
      setIdentity(res.data.identity);
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = async () => {
    try {
      const res = await axios.get(`/self-service/logout/browser`, {
        withCredentials: true,
      });

      console.log(res);
      window.location = res.data.logout_url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <button onClick={getIdentity}>Identity</button>
      {identity && <pre>{JSON.stringify(identity, null, 2)}</pre>}
      <button onClick={logOut}>LogOut</button>
    </div>
  );
}

export default Welcome;
