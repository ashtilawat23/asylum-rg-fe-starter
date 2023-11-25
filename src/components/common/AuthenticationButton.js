import React from 'react';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

import { useAuth0 } from '@auth0/auth0-react';

// switches between login and logout buttons depending on authentication status
const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();
  // both buttons are almost the same, but the login button calls loginWithRedirect() and the logout button calls logout()
  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;
