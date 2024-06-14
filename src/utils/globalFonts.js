import styled from 'styled-components';
import { COLOR_WHITE } from './globalColors';

export const Heading = styled.span`
  display: flex;
  font-size: ${(props) => (props.size ? props.size : '24px')};
  font-weight: ${(props) => (props.fontWeight ? props.weight : '700')};
  color: ${(props) => props.color || COLOR_WHITE};
`;

export const SubHeading = styled.span`
  display: flex;
  font-size: ${(props) => (props.size ? props.size : '18px')};
  font-weight: ${(props) => (props.fontWeight ? props.weight : '700')};
  color: ${(props) => props.color || COLOR_WHITE};
`;

export const SubHeadingMobile = styled.span`
  display: flex;

`;

export default {
  Heading,
  SubHeading,
};
