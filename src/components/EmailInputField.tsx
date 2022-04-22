import React from 'react';
import { LabeledTextField } from './LabeledTextField';
import { StyleSheet, TextInputProps, View } from 'react-native';

type Props = {
  placeholderText: string;
} & TextInputProps;
export const EmailInputField: React.FC<Props> = ({
  placeholderText,
  ...otherProps
}: Props) => {
  return (
    <View style={styles.field}>
      <LabeledTextField
        label={'Email'}
        placeholder={placeholderText}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    paddingBottom: 10,
  },
});
