import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import colors from './styles/Colors';

type Props = {
  label: string;
  style?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
} & TextInputProps;
export const LabeledTextField: React.FC<Props> = ({
  label,
  textInputStyle,
  ...otherProps
}: Props) => {
  return (
    <View style={styles.labelInput}>
      <Text style={styles.labelText}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          autoCapitalize={'none'}
          clearButtonMode={'while-editing'}
          style={[textInputStyle, styles.textInput]}
          placeholderTextColor={colors.disabledText}
          editable={true}
          {...otherProps}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelInput: {
    flex: 1,
    flexDirection: 'column',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    minHeight: 56,
  },
  textInput: {
    padding: 7,
    width: 350,
    height: 56,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: colors.borderBox,
  },
  labelText: {
    fontSize: 14,
    lineHeight: 30,
  },
});
