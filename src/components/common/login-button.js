import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/profile',
      },
      authorizationParams: {
        screen_hint: 'signup',
      },
    });
  };

  return (
    <button
      className="button__login"
      onClick={handleLogin}
      style={{
        backgroundColor: 'transparent',
        color: '#E2F0F7',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Log In
    </button>
  );
};
