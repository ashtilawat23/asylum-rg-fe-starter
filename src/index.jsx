import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  // useHistory,
  Switch,
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

const store = configureStore({ reducer: reducer });
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById('root')
);

export function App() {
  const { Footer, Header, Content } = Layout;
  return (
    <Layout>
      <Header>
        <HeaderContent />
      </Header>
      <Content>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/graphs" component={GraphsContainer} />
          <Route component={NotFoundPage} />
        </Switch>
      </Content>
      <Footer>
        <FooterContent />
      </Footer>
      <Footer>
        <SubFooter />
      </Footer>
    </Layout>
  );
}
