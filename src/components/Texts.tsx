import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import colors from './styles/Colors';
import styled from 'styled-components/native';

export const NormalText: React.FC<TextProps> = ({ ...props }) => {
  return <Text style={[props.style, styles.text]}>{props.children}</Text>;
};

export const BoldText: React.FC<TextProps> = ({ ...props }) => {
  return <Text style={[props.style, styles.boldText]}>{props.children}</Text>;
};

export const Title: React.FC<TextProps> = ({ ...props }) => {
  return <Text style={[props.style, styles.title]}>{props.children}</Text>;
};

export const Description = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.disabledText};
  line-height: 19.6px;
`;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
  boldText: {
    fontWeight: '500',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: colors.headingColor,
    lineHeight: 30,
    marginTop: 30,
  },
});
