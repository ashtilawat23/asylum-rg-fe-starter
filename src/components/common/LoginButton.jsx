import { React } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      onClick={() => loginWithRedirect()}
      style={{
        backgroundColor: '#404C4A',
        color: '#FFFFFF',
        marginLeft: '75px',
      }}
    >
      Log In
    </Button>
  );
};

export default LoginButton;
