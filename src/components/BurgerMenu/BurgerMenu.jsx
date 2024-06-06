import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineDoubleRight, AiOutlineMenu } from 'react-icons/ai'; // Changed AiOutlineDoubleLeft to AiOutlineDoubleRight for semantic correctness
import styled, { keyframes } from 'styled-components';
import { COLOR_PRIMARY, COLOR_WHITE } from '../../utils/globalColors';

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

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const slideOut = keyframes`
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
  animation: ${({ open }) => (open ? slideIn : slideOut)} 0.5s ease-in-out forwards;
`;

const BurgerMenuIcon = styled(AiOutlineMenu)`
  position: fixed;
  z-index: 10;
  top: 20px;
  right: 20px;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
`;

const BurgerMenuCloseIcon = styled(AiOutlineDoubleRight)`
  width: 2rem;
  height: 2rem;
  position: fixed;
  z-index: 10;
  top: 20px;
  right: 30px;
  cursor: pointer;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: transparent;
  color: ${COLOR_WHITE};
  flex-grow: 1;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const BurgerMenu = ({ children = null }) => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  const toggleBurgerMenu = () => {
    setOpenBurgerMenu((prevState) => !prevState);
  };

  return (
    <Header>
      <BurgerMenuIcon size="2rem" onClick={toggleBurgerMenu} color={COLOR_PRIMARY} />
      {openBurgerMenu && (
        <>
          <BurgerBackdrop onClick={toggleBurgerMenu} />
          <BurgerMenuContainer open={openBurgerMenu}>
            <BurgerMenuCloseIcon onClick={toggleBurgerMenu} />
            {children}
          </BurgerMenuContainer>
        </>
      )}
    </Header>
  );
};

BurgerMenu.propTypes = {
  children: PropTypes.node,
};

export default BurgerMenu;
