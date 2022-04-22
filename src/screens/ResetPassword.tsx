import React from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAvoider } from '../components/KeyboardAvoider';
import { ScreenContainerFlexStart } from '../components/styles/Containers';
import { Description, Title } from '../components/Texts';
import { PasswordInputField } from '../components/PasswordInputField';
import { Button } from '../components/Button';
import colors from '../components/styles/Colors';
import { useNavigation } from '@react-navigation/native';

export const ResetPassword = () => {
  const { navigate } = useNavigation();
  return (
    <KeyboardAvoider>
      <ScreenContainerFlexStart>
        <Title>Reset Password</Title>
        <Description>Enter a new password you can remember</Description>
        <View style={styles.inputContainer}>
          <View>
            <PasswordInputField
              labelText={'New Password'}
              placeholderText={'Enter new password'}
            />
            <PasswordInputField
              labelText={'Confirm new Password'}
              placeholderText={'Re-enter new password'}
            />
            <View style={styles.button}>
              <Button
                title={'Submit'}
                textStyle={styles.buttonText}
                onPress={() => {
                  navigate('Log In');
                }}
              />
            </View>
          </View>
        </View>
      </ScreenContainerFlexStart>
    </KeyboardAvoider>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 30,
    flex: 1,
  },
  button: {
    marginTop: 40,
  },
  buttonText: {
    color: colors.white,
  },
});
