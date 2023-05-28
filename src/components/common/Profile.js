import React from 'react';

const Profile = props => {
  return (
    <div
      className="user-info-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '60vh',
      }}
    >
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={props.user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
            style={{ borderRadius: '50%', width: '200px', margin: '30px' }}
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2
            style={{
              textAlign: 'center',
              fontSize: '40px',
              fontFamily: 'MonetaBold',
            }}
          >
            {props.user.name}
          </h2>
          <p
            style={{
              textAlign: 'center',
              fontSize: '20px',
              fontFamily: 'Moneta',
            }}
            className="lead text-muted"
          >
            {props.user.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
