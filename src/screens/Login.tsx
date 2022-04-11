import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { EmailInputField } from '../components/EmailInputField';
import colors from '../components/styles/Colors';
import { KeyboardAvoider } from '../components/KeyboardAvoider';
import { PasswordInputField } from '../components/PasswordInputField';
import { Separator } from '../components/Separator';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import {
  FlexStartWrapper,
  ScreenContainerFlexStart,
} from '../components/styles/Containers';
import { Description, Title } from '../components/Texts';

export const LoginScreen = () => {
  const { navigate } = useNavigation();
  // TODO: enable log in button when the fields are appropriately filled
  // TODO: Add Google icon to log in with Google button
  return (
    <KeyboardAvoider style={styles.root}>
      <ScreenContainerFlexStart>
        <FlexStartWrapper>
          <Title>Log In</Title>
          <Description style={styles.description}>
            Hello! Sign in with your email to continue.
          </Description>
          <View style={styles.inputContainer}>
            <EmailInputField placeholderText={'Enter your email'} />
            <PasswordInputField
              placeholderText={'Enter your password'}
              labelText={'Password'}
            />
            <TouchableOpacity
              style={styles.forgotPass}
              onPress={() => {
                navigate('Forgot Password');
              }}
            >
              <Text style={styles.forgotPassText}>Forgot password</Text>
            </TouchableOpacity>
            <Button
              style={colors.disabledText}
              title={'Log in'}
              textStyle={styles.loginText}
              disabled={true}
            />
            <Separator />
            <Button
              title={'Log in with Google'}
              textStyle={styles.description}
              style={styles.googleButton}
            />
            <View style={styles.signup}>
              <Text>Don&apos;t have an account? </Text>
              <TouchableOpacity>
                <Text style={styles.signupText}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </FlexStartWrapper>
      </ScreenContainerFlexStart>
    </KeyboardAvoider>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
  },
  description: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 30,
  },
  inputContainer: {
    paddingTop: 30,
  },
  forgotPass: {
    alignSelf: 'flex-end',
    marginBottom: 17,
  },
  forgotPassText: {
    color: colors.greenText,
    marginTop: 7,
  },
  loginText: {
    color: colors.white,
    fontWeight: '700',
  },
  googleButton: {
    borderStyle: 'solid',
    borderWidth: StyleSheet.hairlineWidth,
    color: colors.white,
    marginTop: 15,
  },
  signup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 40,
  },
  signupText: {
    color: colors.greenText,
    fontWeight: '500',
  },
});
