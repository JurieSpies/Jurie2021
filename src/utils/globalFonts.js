import styled from 'styled-components';
import { COLOR_WHITE } from './globalColors';

export const Heading = styled.span`
  display: flex;
  font-size: 24px;
  font-weight: 700;
  color: ${COLOR_WHITE};
  `;

export const SubHeading = styled.span`
  display: flex;
  font-size: 18px;
  font-weight: 700;
  color: ${COLOR_WHITE};
`;

export default {
  Heading,
  SubHeading,
};
