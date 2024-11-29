import { COLOR_BLACK, COLOR_WHITE } from '@/utils/globalColors';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 20px;
  width: max-content;
  cursor: pointer;
  background-color: ${(props) => (props.$invert ? 'transparent' : 'var(--color-primary)')};
  color: ${(props) => (props.$invert ? 'var(--color-primary)' : COLOR_BLACK)};
  border: 1px solid ${(props) => (props.$invert ? 'var(--color-primary)' : 'transparent')};

  &:hover {
    color: ${(props) => (props.$invert ? COLOR_WHITE : COLOR_BLACK)};
    box-shadow: 1px 0px 10px 2px var(--color-primary);
    -webkit-box-shadow: 1px 0px 10px 2px var(--color-primary);
    -moz-box-shadow: 1px 0px 10px 2px var(--color-primary);
    transition: all 0.5s ease-in-out;
  }
`;

const Button = ({ children, invert = false, onClick = () => {}, style = {} }) => (
  <StyledButton $invert={invert} onClick={onClick} style={style}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node
  ]),
  invert: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

export default Button;
