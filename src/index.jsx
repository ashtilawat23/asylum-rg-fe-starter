import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  // useHistory,
  Switch,
  Link
} from 'react-router-dom';

import 'antd/dist/antd.less';
import { NotFoundPage } from './components/pages/NotFound';
import { LandingPage } from './components/pages/Landing';

import { FooterContent, SubFooter } from './components/Layout/Footer';
import { HeaderContent } from './components/Layout/Header';

// import { TablePage } from './components/pages/Table';

import { Layout } from 'antd';
import GraphsContainer from './components/pages/DataVisualizations/GraphsContainer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './state/reducers';
import { colors } from './styles/data_vis_colors';
import Auth0ProviderWithHistory from './auth0-provider-with-history';
import Profile from './components/Profile';
import AuthButton from './components/common/AuthButton';
import { useAuth0 } from '@auth0/auth0-react';

const { primary_accent_color } = colors;

const store = configureStore({ reducer: reducer });
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById('root')
);

export function App() {
  const { Footer, Header } = Layout;
  const { isAuthenticated } = useAuth0();

  return (
    <Layout>
      <Header
        style={{
          height: '10vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: primary_accent_color,
        }}
      >
        <HeaderContent />
        <nav style={{ marginLeft: 'auto' }}>
          <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
          {isAuthenticated && <Link to="/profile" style={{ marginRight: '1rem' }}>Profile</Link>}
          <Link to="/graphs" style={{ marginRight: '1rem' }}>Graphs</Link>
          <AuthButton />
        </nav>
      </Header>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/graphs" component={GraphsContainer} />
        <Route path="/profile" component={Profile} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer
        style={{
          backgroundColor: primary_accent_color,
          color: '#E2F0F7',
        }}
      >
        <FooterContent />
      </Footer>
      <Footer
        style={{
          backgroundColor: primary_accent_color,
          padding: 0,
        }}
      >
        <SubFooter />
      </Footer>
    </Layout>
  );
}

// export function App() {
//   const { Footer, Header } = Layout;
//   return (
//     <Layout>
//       <Header
//         style={{
//           height: '10vh',
//           display: 'flex',
//           alignItems: 'center',
//           backgroundColor: primary_accent_color,
//         }}
//       >
//         <HeaderContent />
//       </Header>
//       <Switch>
//         <Route path="/" exact component={LandingPage} />
//         <Route path="/graphs" component={GraphsContainer} />
//         <Route component={NotFoundPage} />
//       </Switch>
//       <Footer
//         style={{
//           backgroundColor: primary_accent_color,
//           color: '#E2F0F7',
//         }}
//       >
//         <FooterContent />
//       </Footer>
//       <Footer
//         style={{
//           backgroundColor: primary_accent_color,
//           padding: 0,
//         }}
//       >
//         <SubFooter />
//       </Footer>
//     </Layout>
//   );
// }
