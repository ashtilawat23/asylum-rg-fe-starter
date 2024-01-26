import { Button, Space, Typography, Layout, Image } from 'antd';
import React from 'react';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import '../../styles/RenderFooter.less';

const { Text } = Typography;
const { primary_accent_color } = colors;

function FooterContent() {
  return (
    <div className="footer-content">
      <Image src={Logo} preview={false} alt="HRF logo white" />
      <Text>
        Human Rights First
        <br />
        75 Broad St, 31st Floor, New York,
        <br />
        New York, New York 10004 US
      </Text>
      <Text>For Media Inquiries call 202-370-3323</Text>
    </div>
  );
}

function SubFooter() {
  const { Footer } = Layout;
  const base_url = 'https://www.humanrightsfirst.org';
  const button_links_by_text = {
    'About Us': `${base_url}/about`,
    'Contact Us': `${base_url}/about/contact`,
    Press: `${base_url}/press`,
    'Terms & Privacy': `${base_url}/about/privacy-policy`,
    'Sign Up': `${base_url}/sign-up`,
    Careers: `${base_url}/careers`,
  };

  return (
    <Space direction="horizontal">
      {Object.entries(button_links_by_text).map((text_link_pair, index) => {
        return (
          <Button
            key={index}
            type="text"
            size="small"
            href={text_link_pair[1]}
            style={{ color: 'white' }}
          >
            {text_link_pair[0]}
          </Button>
        );
      })}
    </Space>
  );
}

export { FooterContent, SubFooter };
