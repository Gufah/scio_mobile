import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './screens/Login';
import { WelcomeScreen } from './screens/Welcome';
import { ForgotPassword } from './screens/ForgotPassword';
import { ResetPassword } from './screens/ResetPassword';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='Log In' component={LoginScreen} />
        <Stack.Screen name='Forgot Password' component={ForgotPassword} />
        <Stack.Screen name='Reset Password' component={ResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
