import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from '../../components';
import { StackNavigationProps, Routes } from '../../components/Navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  infoContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 15
  }
})

const Welcome = ({ navigation }: StackNavigationProps<Routes, 'Welcome'>) => {

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text>TODO ALL OF THIS INFO AND LAYOUT</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          variant='primary'
          label='Login'
          onPress={() => {navigation.navigate('Login')}}
        />
        <Button
          label='Sign Up'
          variant='secondary'
          onPress={() => {navigation.navigate('SignUp')}}
        />
      </View>
    </View>
  );
};

export default Welcome;