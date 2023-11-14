import React from 'react';
import AuthenticationButton from './AuthenticationButton';
import ProfileLink from './ProfileLink';
import { useAuth0 } from '@auth0/auth0-react';
import emptyProfile from '../../styles/Images/blank-profile-picture-973460_640.png';

// nav component to be added to the header
const AuthNav = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div className="auth-nav">
      {/* 
            ternary function to make sure that the profile link only gets shown if the user
            is authenticated
        */}
      {isAuthenticated ? (
        <ProfileLink />
      ) : (
        <button
          onClick={() => {
            loginWithRedirect({
              screen_hint: 'signup', // redirects to signup page
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
