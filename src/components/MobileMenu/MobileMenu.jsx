import { useState } from 'react';
import styled from 'styled-components';
import { COLOR_WHITE, COLOR_DARK } from '@/utils/globalColors';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import ColorPicker from '../ColorPicker/ColorPicker';

const MenuIcon = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;
  margin-left: 20px;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  width: 250px;
  height: 100vh;
  background-color: ${COLOR_DARK};
  transition: right 0.3s ease-in-out;
  z-index: 1000;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.div`
  color: ${COLOR_WHITE};
  padding: 15px 0;
  cursor: pointer;
  transition: color 0.3s;
  
  &:hover {
    color: var(--color-primary);
  }
`;

const CloseButton = styled.div`
  color: ${COLOR_WHITE};
  font-size: 24px;
  cursor: pointer;
  align-self: flex-end;
  margin-bottom: 20px;
`;

const ColorPickerWrapper = styled.div`
  margin-top: auto;
  padding: 20px 0;
  border-top: 1px solid ${COLOR_WHITE}40;
`;

const MobileMenu = ({ menus, activeTab, onMenuClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (menu) => {
    onMenuClick(menu);
    setIsOpen(false);
  };

  return (
    <>
      <MenuIcon onClick={() => setIsOpen(true)}>
        <RiMenu3Line />
      </MenuIcon>
      
      <MenuOverlay $isOpen={isOpen}>
        <CloseButton onClick={() => setIsOpen(false)}>
          <RiCloseLine />
        </CloseButton>
        
        {menus.map((menu) => (
          <MenuItem
            key={menu}
            onClick={() => handleMenuClick(menu)}
            style={{
              color: activeTab === menu ? 'var(--color-primary)' : COLOR_WHITE
            }}
          >
            {menu}
          </MenuItem>
        ))}
        
        <ColorPickerWrapper>
          <ColorPicker />
        </ColorPickerWrapper>
      </MenuOverlay>
    </>
  );
};

export default MobileMenu;
