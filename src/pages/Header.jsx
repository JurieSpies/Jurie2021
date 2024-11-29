import Button from '@/components/Button/Button';
import { COLOR_WHITE } from '@/utils/globalColors';
import { Heading } from '@/utils/globalFonts';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { PiWhatsappLogoBold } from 'react-icons/pi';
import styled from 'styled-components';
import { openWhatsapp } from '../utils/helpers';
import ColorPicker from '@/components/ColorPicker/ColorPicker';
import MobileMenu from '@/components/MobileMenu/MobileMenu';

const WhatsappIcon = styled(PiWhatsappLogoBold)`
  font-weight: bold;
  margin-right: 3px;
  font-size: 18px;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${COLOR_WHITE};
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  margin: 20px 0;
`;

const Green = styled.span`
  color: var(--color-primary);
  margin-left: 5px;
`;

const HeaderTab = styled.div`
  display: flex;
  text-decoration: ${({ $active }) => ($active ? 'underline' : 'none')};
  text-decoration-color: var(--color-primary);
  text-decoration-thickness: 2px;
  margin: 0 20px;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.3s;
  &:hover {
  color: var(--color-primary);
  transform: scale(1.2);
  }
`;

const Right = styled.div`
  margin-left: auto;
  color: ${COLOR_WHITE};
  display: flex;
  align-items: center;
`;

const DesktopColorPicker = styled.div`
  margin-left: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = ({ active = 'Home' }) => {
  const [activeTab, setActiveTab] = useState('Home');
  const menus = [
    'Home',
    'Resume',
    'Work',
  ];

  const activeTabFunction = (e) => {
    setActiveTab(e);
    active(e);
  };

  useEffect(() => {
    active('Home');
  }, []);

  return (
    <MainContent>
      <Heading>
        Jurie
        <Green>.</Green>
      </Heading>
      <Right>
        {menus?.map((menu) => (
          <HeaderTab key={menu} $active={activeTab === menu} onClick={() => activeTabFunction(menu)}>
            {menu}
          </HeaderTab>
        ))}
        <Button onClick={openWhatsapp}>
          <WhatsappIcon size={18} />
          Whatsapp
        </Button>
        <DesktopColorPicker>
          <ColorPicker />
        </DesktopColorPicker>
        <MobileMenu 
          menus={menus}
          activeTab={activeTab}
          onMenuClick={activeTabFunction}
        />
      </Right>
    </MainContent>
  );
};

Header.propTypes = {
  active: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default Header;
