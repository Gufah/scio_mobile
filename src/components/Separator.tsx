import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import colors from './styles/Colors';

export const Separator = () => {
  return (
    <Wrapper>
      <Line />
      <View>
        <Text>Or</Text>
      </View>
      <Line />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Line = styled.View`
  flex: 1;
  height: 0.5px;
  background-color: ${colors.black};
`;
const Text = styled.Text`
  width: 50px;
  text-align: center;
`;
