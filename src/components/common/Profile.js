import React from 'react';

const Profile = props => {
  return (
    <div
      className="user-info-container"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={props.user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{props.user.name}</h2>
          <p className="lead text-muted">{props.user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
