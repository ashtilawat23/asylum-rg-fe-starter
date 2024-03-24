import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
// import { NavBar } from "../components/navigation/desktop/nav-bar";
// import { MobileNavBar } from "../components/navigation/mobile/mobile-nav-bar";

export const ProfilePage = () => {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <div className="profile-page">
      <h1 id="profile-title" className="profile-title">
        Profile Page
      </h1>
      <div className="profile-body">
        <div className="profile-img">
          <img src={user.picture} alt="Profile" className="profile__avatar" />
        </div>
        <div className="profile-text">
          <h2 className="profile-details">
            <strong>Username:</strong> {user.name}
          </h2>
          <h3 className="profile-details">
            <strong>Email:</strong> {user.email}
          </h3>
        </div>
      </div>
    </div>
  );
};
