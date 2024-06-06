import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineDoubleLeft, AiOutlineMenu } from 'react-icons/ai';
import styled, { keyframes } from 'styled-components';
import { COLOR_RED } from '../../constants/GlobalColors';

const BurgerBackdrop = styled.div`
  display:flex;
  z-index: 100;
  position: absolute;
  top:0;
  bottom:0;
  right:0;
  left:0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
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
    transform: translateX(-100%);
  }
`;

const BurgerMenuContainer = styled.div`
  background-color: black;
  bottom: 0px;
  left: 0px;
  padding-left: 30px;
  padding-top: 55px;
  position: fixed;
  top: 0px;
  width: 60dvw;
  z-index: 100;
  animation: ${({ open }) => (open ? slideIn : slideOut)} 0.5s ease-in-out forwards;
`;

const BurgerMenuIcon = styled(AiOutlineMenu)`
    position: fixed;
    z-index: 10;
    top: 20px;
    left: 10px;
    cursor: pointer;
    touch-action: none;
    -webkit-tap-highlight-color: transparent;
  `;

const BurgerMenuCloseIcon = styled(AiOutlineDoubleLeft)`
  width: 2rem;
  height: 2rem;
  position: fixed;
    z-index: 10;
    top: 20px;
    right: 10px;
    cursor: pointer;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: transparent;
  color: #fff;
  flex-grow: 1;
  justify-content: space-around;
  flex-wrap: wrap;
  `;

function BurgerMenu({ children }) {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  const toggleBurgerMenu = () => {
    setOpenBurgerMenu((prevState) => !prevState);
  };

  return (
    <Header>
      <BurgerMenuIcon size="2rem" onClick={toggleBurgerMenu} color={COLOR_RED} />
      {openBurgerMenu
        && (
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
}

BurgerMenu.propTypes = {
  children: PropTypes.node,
};

BurgerMenu.defaultProps = {
  children: null,
};

export default BurgerMenu;
