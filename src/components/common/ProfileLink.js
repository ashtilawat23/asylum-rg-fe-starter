import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export default function ProfileLink() {
  const { user } = useAuth0();
  const { picture } = user;
  return (
    <Link to="/profile">
      <img
        style={{ maxHeight: '100%', width: '20px' }}
        src={picture}
        alt="profile avi"
      />
    </Link>
  );
}
