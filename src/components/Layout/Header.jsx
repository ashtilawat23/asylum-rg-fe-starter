import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import '../../styles/LessRenders/RenderHeader.less';

function HeaderContent() {
  return (
    <div className="header-content">
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
    </div>
  );
}

export { HeaderContent };
