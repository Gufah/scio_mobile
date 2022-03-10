import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import colors from './styles/Colors';

type ButtonProps = {
  title?: string;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};
export const Button = ({ title, onPress, textStyle, style }: ButtonProps) => {
  return (
    <StyledTouchableOp onPress={onPress} style={style}>
      <StyledView>
        <StyledText style={textStyle}>{title}</StyledText>
      </StyledView>
    </StyledTouchableOp>
  );
};

const StyledView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;
const StyledText = styled.Text`
  font-size: 15px;
  text-align: center;
`;
const StyledTouchableOp = styled.TouchableOpacity`
  border-radius: 12px;
  justify-content: center;
  padding-left: 14px;
  padding-right: 14px;
  background-color: ${colors.green};
  padding-bottom: 6px;
  padding-top: 6px;
  height: 45px;
`;
