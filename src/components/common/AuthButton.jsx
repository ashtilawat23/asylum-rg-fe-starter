import React from'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from './Button';

const AuthButton = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <Button
          handleClick={() => logout({ returnTo: window.location.origin })}
          buttonText="Log Out"
          classType="primary"
        />
      ) : (
        <Button
          handleClick={() => loginWithRedirect()}
          buttonText="Log In"
          classType="primary"
        />
      )}
    </div>
  );
};

export default AuthButton;
