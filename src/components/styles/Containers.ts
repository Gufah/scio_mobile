import styled from 'styled-components/native';
import colors from './Colors';

export const ScreenContainerFlexStart = styled.View`
  padding: 15px;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${colors.white};
`;

export const FlexStartWrapper = styled.View`
  flex: 1;
  flex-direction: column;
`;
