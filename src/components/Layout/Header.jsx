import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../common/LoginButton';
import LogoutButton from '../common/LogoutButton';

const { primary_accent_color } = colors;

const Authnav = () => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

const Profilenav = () => {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <Link to="/profile" style={{ color: '#E2F0F7', marginLeft: '75px' }}>
        Profile
      </Link>
    )
  );
};

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
      <div>
        <Link to="/" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Home
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7' }}>
          Graphs
        </Link>
        <Profilenav />
        <Authnav />
      </div>
    </div>
  );
}

export { HeaderContent };
