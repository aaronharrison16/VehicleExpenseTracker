import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../../components';
import firebase from 'firebase'
import { StackNavigationProps, Routes } from '../../components/Navigation';
import { StackActions } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Splash = ({ navigation }: StackNavigationProps<Routes, 'Splash'>) => {

  useEffect(() => {
    checkAuthStatus()
  })

  const checkAuthStatus = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('todo - navigate to home screen')
      } else {
        navigation.dispatch({
          ...StackActions.replace('Onboarding')
        })
      }
    })
  }  

  return (
    <View style={styles.container}>
      <Text>LOADING...</Text>
    </View>
  )
}

export default Splash;
