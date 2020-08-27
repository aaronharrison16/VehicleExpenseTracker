import React from 'react';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';

import { darkTheme, lightTheme } from './src/components';
import { AuthenticationNavigator } from './src/Authentication';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default function App() {
  const scheme = useColorScheme()
  const theme = scheme === 'dark' ? darkTheme : lightTheme
  return (
    <SafeAreaView style={styles.container}>
      <AppearanceProvider>
        <NavigationContainer theme={theme} >
          <StatusBar
            backgroundColor={theme.colors.background}
            barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}  
          />
          <AuthenticationNavigator />
        </NavigationContainer>
      </AppearanceProvider>
    </SafeAreaView>
  );
}
