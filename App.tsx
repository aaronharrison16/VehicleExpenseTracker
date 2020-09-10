import React from 'react';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import firebase from 'firebase'

import { darkTheme, lightTheme } from './src/components';
import { AuthenticationNavigator } from './src/Authentication';
import { GeneralNavigator } from './src/General';
import { firebaseConfig } from './config';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoutes } from './src/Navigation/Navigation';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const AppStack = createStackNavigator<AppRoutes>();

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
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen name="Authentication" component={AuthenticationNavigator} />
            <AppStack.Screen name="General" component={GeneralNavigator} />
          </AppStack.Navigator>
        </NavigationContainer>
      </AppearanceProvider>
    </SafeAreaView>
  );
}
