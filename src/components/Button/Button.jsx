import { COLOR_BLACK, COLOR_PRIMARY, COLOR_WHITE } from '@/utils/globalColors';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.div`
  display: flex;
  background-color: ${(props) => (props.$invert ? 'transparent' : COLOR_PRIMARY)};
  padding: 10px 20px;
  border-radius: 20px;
  width: max-content;
  cursor: pointer;
  color: ${(props) => (props.$invert ? COLOR_PRIMARY : COLOR_BLACK)};
  border: 1px solid  ${(props) => (props.$invert ? COLOR_PRIMARY : 'transparent')};

  &:hover {
    color: ${(props) => (props.$invert ? COLOR_WHITE : COLOR_BLACK)};
    box-shadow: 1px 0px 10px 2px ${COLOR_PRIMARY};
    -webkit-box-shadow: 1px 0px 10px 2px ${COLOR_PRIMARY};
    -moz-box-shadow: 1px 0px 10px 2px ${COLOR_PRIMARY};
  }
`;

const Button = ({ children, invert = false, onClick = () => {}, style = {} }) => (
  <StyledButton $invert={invert} onClick={onClick} style={style}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: propTypes.oneOfType([propTypes.element, propTypes.string]),
  invert: propTypes.bool,
  onClick: propTypes.func,
  style: propTypes.object,
};

export default Button;
