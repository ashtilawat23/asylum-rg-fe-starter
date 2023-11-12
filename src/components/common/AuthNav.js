import React from 'react';
import AuthenticationButton from './AuthenticationButton';
import ProfileLink from './ProfileLink';
import { useAuth0 } from '@auth0/auth0-react';
import emptyProfile from '../../styles/Images/blank-profile-picture-973460_640.png';
const AuthNav = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div className="auth-nav">
      {isAuthenticated ? (
        <ProfileLink />
      ) : (
        <button
          onClick={() => {
            loginWithRedirect({
              screen_hint: 'signup',
            });
          }}
          className="empty-profile-button"
        >
          <img alt="empty profile avi" src={emptyProfile} />
        </button>
      )}
      <AuthenticationButton />
    </div>
  );
};

export default AuthNav;
