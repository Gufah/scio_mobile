import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import styled from 'styled-components/native';
import colors from './styles/Colors';

type ButtonProps = {
  title?: string;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  style?: StyleProp<any>;
  disabled?: boolean;
};
export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  textStyle,
  style,
  disabled,
}: ButtonProps) => {
  return (
    <StyledTouchableOp onPress={onPress} style={style} disabled={disabled}>
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
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;
const StyledTouchableOp = styled.TouchableOpacity`
  border-radius: 5px;
  justify-content: center;
  background-color: ${(props: ButtonProps) =>
    props.style ? props.style : colors.green};
  padding: 6px 14px;
  height: 56px;
  margin-top: 10px;
  margin-bottom: 10px;
  min-width: 100%;
`;
