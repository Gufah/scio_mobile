import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScreenContainerFlexStart } from '../components/styles/Containers';
import { Description, Title } from '../components/Texts';
import { KeyboardAvoider } from '../components/KeyboardAvoider';
import { EmailInputField } from '../components/EmailInputField';
import colors from '../components/styles/Colors';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export const ForgotPassword = () => {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState('');
  return (
    <KeyboardAvoider style={styles.root}>
      <ScreenContainerFlexStart>
        <Title>Forgot Password</Title>
        <Description>
          Enter the email address you registered with. We&apos;ll send you an
          email in order to let you set a new password.
        </Description>
        <View style={styles.inputContainer}>
          <View>
            <EmailInputField
              placeholderText='Enter your email address'
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
            <View style={styles.button}>
              <Button
                title={'Submit'}
                onPress={() => {
                  navigate('Reset Password');
                }}
                textStyle={{ color: colors.white }}
              />
            </View>
          </View>
        </View>
      </ScreenContainerFlexStart>
    </KeyboardAvoider>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
  },
  inputContainer: {
    marginTop: 30,
    flex: 1,
  },
  button: {
    paddingTop: 15,
  },
});
