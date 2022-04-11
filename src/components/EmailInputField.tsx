import React from 'react';
import { LabeledTextField } from './LabeledTextField';
import { StyleSheet, View } from 'react-native';

type Props = {
  placeholderText: string;
};
export const EmailInputField: React.FC<Props> = ({
  placeholderText,
}: Props) => {
  return (
    <View style={styles.field}>
      <LabeledTextField label={'Email'} placeholder={placeholderText} />
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    paddingBottom: 10,
  },
});
