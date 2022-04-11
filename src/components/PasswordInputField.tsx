import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { LabeledTextField } from './LabeledTextField';

type Props = {
  placeholderText: string;
  labelText: string;
  style?: StyleProp<ViewStyle>;
};
export const PasswordInputField: React.FC<Props> = ({
  placeholderText,
  labelText,
  style,
}) => {
  return (
    <View style={style}>
      <LabeledTextField
        label={labelText}
        textContentType={'password'}
        returnKeyType={'send'}
        placeholder={placeholderText}
      />
    </View>
  );
};
