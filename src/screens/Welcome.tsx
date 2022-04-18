import React from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar, Image } from 'react-native';
import { Button } from '../components/Button';
import colors from '../components/styles/Colors';
import { useNavigation } from '@react-navigation/native';
import digimod from '../../images/digi-mod.png';

export const WelcomeScreen = () => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' />
      <View style={styles.title}>
        <Image source={digimod} />
      </View>
      <View style={styles.buttonDiv}>
        <View style={styles.buttons}>
          <Button
            title='Login'
            onPress={() => navigate('Log In')}
            textStyle={styles.textStyle}
          />
          <Button
            title='Register'
            onPress={() => {
              return;
            }}
            textStyle={styles.textStyle}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    backgroundColor: colors.white,
  },
  title: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonDiv: {
    alignItems: 'center',
  },
  buttons: {
    width: '85%',
    marginTop: 80,
    marginBottom: '40%',
  },
  textStyle: {
    fontWeight: 'bold',
  },
});
