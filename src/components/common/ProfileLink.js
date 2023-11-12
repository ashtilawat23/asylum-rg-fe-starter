import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export default function ProfileLink() {
  const { picture } = useAuth0().user;
  return (
    <Link to="/profile" className="profile-link">
      <img
        style={{ maxHeight: '100%', width: '25px' }}
        src={picture}
        alt="profile avi"
      />
    </Link>
  );
}
