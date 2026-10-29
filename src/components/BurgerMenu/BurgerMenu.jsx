import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineDoubleRight, AiOutlineMenu } from 'react-icons/ai';
import { IoColorPaletteOutline } from 'react-icons/io5';
import styled, { keyframes } from 'styled-components';
import { COLOR_WHITE, COLOR_DARK } from '../../utils/globalColors';
import { openWhatsapp } from '../../utils/helpers';
import { useColorPicker } from '../ColorPicker/ColorPicker';

const BurgerBackdrop = styled.div`
  display: flex;
  z-index: 100;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const openMenu = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const closeMenu = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
`;

const BurgerMenuContainer = styled.div`
  background-color: black;
  bottom: 0px;
  right: 0px;
  padding-right: 30px;
  padding-top: 55px;
  position: fixed;
  top: 0px;
  width: 70dvw;
  z-index: 100;
  animation: ${(props) => (props.open ? openMenu : closeMenu)} 0.8s ease-in-out forwards;
  transform: translateX(100%); // Start off-screen
  ${(props) => !props.open && 'visibility: hidden;'} // Hide when not open
`;

const BurgerMenuIcon = styled.button`
  background: none;
  border: 0;
  padding: 0;
  color: inherit;
  font: inherit;
  display: flex;
  color: var(--color-primary);
  position: fixed;
  z-index: 10;
  top: 20px;
  right: 20px;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
`;

const BurgerMenuCloseIcon = styled.button`
  background: none;
  border: 0;
  padding: 0;
  color: inherit;
  font: inherit;
  display: flex;
  font-size: 2rem;
  color: ${COLOR_WHITE};
  position: fixed;
  z-index: 10;
  top: 20px;
  right: 30px;
  cursor: pointer;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: transparent;
  color: ${COLOR_WHITE};
  flex-grow: 1;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const HeaderTab = styled.button`
  background: none;
  border: 0;
  padding: 0;
  color: inherit;
  font: inherit;
  display: flex;
  text-decoration: ${({ $active }) => ($active ? 'underline' : 'none')};
  text-decoration-color: var(--color-primary);
  text-decoration-thickness: 2px;
  margin: 30px 30px;
  cursor: pointer;
  transform: scale(1);
  font-size: 18px;
  transition: transform 0.3s;
  width: fit-content;
  margin-left: auto;
  &:hover {
    color: var(--color-primary);
    transform: scale(1.2);
  }
`;

const ColorPickerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 30px 30px;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.3s;
  width: fit-content;
  margin-left: auto;

  &:hover {
    transform: scale(1.2);
  }
`;

const ColorPickerIcon = styled.button`
  background: none;
  border: 0;
  padding: 0;
  color: inherit;
  font: inherit;
  display: flex;
  color: var(--color-primary);
  font-size: 24px;
  cursor: pointer;
`;

const ResetButton = styled.button`
  color: ${COLOR_DARK};
  border: none;
  padding: 6px 5px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: opacity 0.2s;
  background: var(--color-primary);
  display: ${props => props.$showReset ? 'block' : 'none'};

  &:hover {
    opacity: 0.9;
  }
`;

const ColorInput = styled.input`
  display: none;
`;

const BurgerMenu = ({ active = 'Home' }) => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const { color, handleColorChange, handleReset, DEFAULT_COLOR } = useColorPicker();
  const colorInputRef = useRef(null);

  const menus = [
    'Home',
    'Resume',
    'Work',
  ];

  const toggleBurgerMenu = () => {
    setOpenBurgerMenu((prevState) => !prevState);
  };

  const activeTabFunction = (e) => {
    setActiveTab(e);
    active(e);
  };

  const onSectionClick = (menu) => {
    activeTabFunction(menu);
    toggleBurgerMenu();
  };

  const handleIconClick = () => {
    colorInputRef.current?.click();
  };

  useEffect(() => {
    if (openBurgerMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [openBurgerMenu]);

  useEffect(() => {
    active('Home');
  }, []);

  return (
    <Header>
      <BurgerMenuIcon
        type="button"
        aria-label="Open menu"
        aria-expanded={openBurgerMenu}
        onClick={() => toggleBurgerMenu()}
      >
        <AiOutlineMenu size="2rem" aria-hidden="true" />
      </BurgerMenuIcon>
      {openBurgerMenu && (
        <BurgerBackdrop onClick={() => toggleBurgerMenu()}>
          <BurgerMenuContainer open={openBurgerMenu} onClick={(e) => e.stopPropagation()}>
            <BurgerMenuCloseIcon type="button" aria-label="Close menu" onClick={() => toggleBurgerMenu()}>
              <AiOutlineDoubleRight aria-hidden="true" />
            </BurgerMenuCloseIcon>
            <Header>
              {menus?.map((menu) => (
                <HeaderTab
                  type="button"
                  key={menu}
                  aria-current={activeTab === menu ? 'page' : undefined}
                  $active={activeTab === menu}
                  onClick={() => onSectionClick(menu)}
                >
                  {menu}
                </HeaderTab>
              ))}
              <HeaderTab type="button" onClick={openWhatsapp}>Whatsapp</HeaderTab>
              <ColorPickerContainer>
                <ColorPickerIcon
                  type="button"
                  title="Customize theme color"
                  aria-label="Customize theme color"
                  onClick={handleIconClick}
                >
                  <IoColorPaletteOutline aria-hidden="true" />
                </ColorPickerIcon>
                <ResetButton
                  type="button"
                  onClick={handleReset}
                  $showReset={color !== DEFAULT_COLOR}
                >
                  Reset
                </ResetButton>
              </ColorPickerContainer>
              <ColorInput
                tabIndex={-1}
                aria-hidden="true"
                ref={colorInputRef}
                type="color"
                value={color}
                onChange={handleColorChange}
              />
            </Header>
          </BurgerMenuContainer>
        </BurgerBackdrop>
      )}
    </Header>
  );
};

BurgerMenu.propTypes = {
  active: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default BurgerMenu;
