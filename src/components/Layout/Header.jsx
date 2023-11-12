import React from 'react';
// styling
import { Image } from 'antd';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
// auth
import AuthNav from '../common/AuthNav';
// navigation
import { Link } from 'react-router-dom';

const { primary_accent_color } = colors;

function HeaderContent() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div style={{ display: 'flex', gap: '35px' }}>
        <div>
          <Link to="/" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
            Home
          </Link>
          <Link to="/graphs" style={{ color: '#E2F0F7' }}>
            Graphs
          </Link>
          {/* Ternary function to make sure that the right link is being displayed */}
        </div>
        <AuthNav />
      </div>
    </div>
  );
}

export { HeaderContent };
