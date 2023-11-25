import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// this is a link to the profile page, this only shows up if the user is logged
// otherwise it shows an empty profile avi
export default function ProfileLink() {
  const { picture } = useAuth0().user;
  return (
    <Link to="/profile" className="profile-link">
      <img
        style={{ maxHeight: '100%', width: '30px' }}
        src={picture}
        alt="profile avi"
      />
    </Link>
  );
}
