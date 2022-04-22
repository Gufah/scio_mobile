import React, { useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import colors from './styles/Colors';

type Props = {
  placeholderText: string;
  labelText: string;
  style?: StyleProp<ViewStyle>;
} & TextInputProps;
export const PasswordInputField: React.FC<Props> = ({
  placeholderText,
  labelText,
  ...otherProps
}) => {
  const [isSecureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <View style={styles.labelInput}>
      <Text style={styles.labelText}>{labelText}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          autoCapitalize={'none'}
          style={styles.textInput}
          placeholderTextColor={colors.disabledText}
          editable={true}
          placeholder={placeholderText}
          returnKeyType={'done'}
          secureTextEntry={isSecureTextEntry}
          {...otherProps}
        />
        <TouchableOpacity
          onPress={() => {
            setSecureTextEntry(!isSecureTextEntry);
          }}
        >
          {isSecureTextEntry ? <Text>Show</Text> : <Text>Hide</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelInput: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 56,
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.borderBox,
  },
  textInput: {
    padding: 7,
    width: '87%',
    height: 56,
    borderRadius: 3,
  },
  labelText: {
    fontSize: 14,
    lineHeight: 30,
    alignSelf: 'flex-start',
  },
});
