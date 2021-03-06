import styled from 'styled-components/native';
import colors from './Colors';

export const ScreenContainerFlexStart = styled.View`
  padding: 15px;
  flex: 1;
  justify-content: flex-start;
  background-color: ${colors.white};
`;

export const FlexStartWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  padding-left: 7px;
  padding-right: 7px;
`;
