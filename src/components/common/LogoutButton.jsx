import { React } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      onClick={() => logout()}
      style={{
        backgroundColor: '#404C4A',
        color: '#FFFFFF',
        marginLeft: '75px',
      }}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
