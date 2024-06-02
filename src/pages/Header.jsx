import Button from '@/components/Button/Button';
import { COLOR_PRIMARY, COLOR_WHITE } from '@/utils/globalColors';
import { Heading } from '@/utils/globalFonts';
import styled from 'styled-components';

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${COLOR_WHITE};
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  flex:1;
  margin: 20px 0;
`;

const Green = styled.span`
  color: ${COLOR_PRIMARY};
  margin-left: 5px;
`;

const HeaderTab = styled.div`
    display: flex;
    color: ${COLOR_WHITE};
    text-decoration: ${({ $active }) => ($active ? 'underline' : 'none')};
    margin: 0 20px;
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.3s;
  &:hover {
    color: ${COLOR_PRIMARY};
    transform: scale(1.2);
  }
`;

const Right = styled.div`
  margin-left: auto;
  color: ${COLOR_WHITE};
  display: flex;
  align-items: center;
`;

const Header = () => {
  const menus = [
    'Home',
    'Services',
    'Resume',
    'Work',
    'Contact',
  ];

  return (
    <MainContent>
      <Heading>
        Jurie
        <Green>.</Green>
      </Heading>
      <Right>
        {menus?.map((menu, index) => (
          <HeaderTab key={menu}>
            {menu}
          </HeaderTab>
        ))}
        <Button>
          <>
            Hire Me
          </>
        </Button>
      </Right>
    </MainContent>
  );
};

Header.propTypes = {
  // menus: propTypes.object.isRequired,
};

export default Header;
