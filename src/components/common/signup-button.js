import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
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
      className="button__sign-up"
      onClick={handleSignUp}
      style={{
        backgroundColor: 'transparent',
        color: '#E2F0F7',
        marginRight: '75px',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Sign Up
    </button>
  );
};
