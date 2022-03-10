import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';

import { WelcomeScreen } from './screens/Welcome';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return <WelcomeScreen />;
};

export default App;
