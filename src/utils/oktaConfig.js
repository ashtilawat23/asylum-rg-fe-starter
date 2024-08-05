const config = {
  issuer: process.env.REACT_APP_OKTA_ISSUER_URI,
  redirect_uri: window.location.origin,
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  pkce: true,
  scopes: ['openid', 'email', 'profile'],
};

export { config };
