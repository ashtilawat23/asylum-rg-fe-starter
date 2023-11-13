import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  console.log(user);

  return (
    <div>
      <div className="row align-items-center">
        <div className="col-md-2 m-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-left text-md-left">
          <h2>{name}</h2>
          {email ? <p className="lead text-muted">{email}</p> : null}
        </div>
      </div>
      <div className="row">
        <pre className="col-12  p-4">
          <div className="col-md-6 ">
            <table className="table table-striped table-hover table-bordered ">
              <thead className="table-dark">
                <tr>
                  <th></th>
                  <th className="text-center">Data</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(user).map((keyName, i) => (
                  <tr key={i}>
                    <td>
                      {keyName
                        .replace('_', ' ')
                        .split(' ')
                        .map(
                          word => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(' ')}
                    </td>
                    <td className="text-wrap">{user[keyName]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </pre>
      </div>
    </div>
  );
};

export default Profile;
