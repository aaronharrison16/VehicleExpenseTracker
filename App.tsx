import React from 'react';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './src/Authentication/Onboarding/Onboarding';
import { darkTheme, lightTheme } from './src/components';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
  </AuthenticationStack.Navigator>
);

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

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
