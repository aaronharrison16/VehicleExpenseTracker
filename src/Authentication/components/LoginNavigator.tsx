import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { palette, Text } from '../../components';

const styles = StyleSheet.create({
  loginContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15
  },
  loginText: {
    // margin: 3,
    fontSize: 18,
  },
  loginLink: {
    color: palette.saffron
  }
})

interface LoginNavigatorProps {
  onPress: () => void;
}

const LoginNavigator = ({ onPress }: LoginNavigatorProps) => {
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginText}>Already have an Account?</Text>
      <TouchableOpacity { ...{onPress}}>
        <Text style={[styles.loginText, styles.loginLink]}>Log in</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginNavigator;
