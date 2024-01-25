import React from 'react';
import { Layout, Image, Menu } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import '../../styles/RenderHeader.less';

function HeaderContent() {
  const { Header } = Layout;

  return (
    <Header
      style={{
        backgroundColor: '#404C4A',
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div className="navlink-container">
        <Link id="header-home-link" to="/">
          Home
        </Link>
        <Link id="header-graph-link" to="/graphs">
          Graphs
        </Link>
      </div>
    </Header>
  );
}

export { HeaderContent };
