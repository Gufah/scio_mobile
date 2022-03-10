import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from 'react-native';
import welcomeScreenImg from '../../images/money-wallpaper-ixpap-9.jpeg';
import { Button } from '../components/Button';
import colors from '../components/styles/Colors';

export const WelcomeScreen = () => {
  return (
    <ImageBackground source={welcomeScreenImg} style={styles.background}>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>SCIO</Text>
        </View>
        <View style={styles.buttonDiv}>
          <View style={styles.buttons}>
            <Button
              title='Login'
              onPress={() => {
                return;
              }}
              textStyle={styles.textStyle}
            />
            <Button
              title='Register'
              onPress={() => {
                return;
              }}
              style={styles.register}
              textStyle={styles.textStyle}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
  },
  background: {
    flex: 1,
  },
  title: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  titleText: {
    color: colors.black,
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonDiv: {
    alignItems: 'center',
  },
  buttons: {
    width: '85%',
    marginTop: 80,
    marginBottom: '40%',
  },
  register: {
    marginTop: 10,
  },
  textStyle: {
    fontWeight: 'bold',
  },
});
