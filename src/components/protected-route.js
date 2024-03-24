import { withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';
import { Route } from 'react-router-dom';
import LoadingComponent from './common/LoadingComponent';

export const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => (
        <div className="page-layout">
          <LoadingComponent />
        </div>
      ),
    })}
    {...args}
  />
);
