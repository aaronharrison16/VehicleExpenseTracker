import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Keyboard, UIManager } from 'react-native'
import { Text, Button, TextInput } from '../../components';
import { StackNavigationProps, AuthenticationRoutes } from '../../components/Navigation';
import { LoginNavigator } from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  createAccountText: {
    fontSize: 40,
    fontWeight: '600',
    paddingVertical: 5
  },
  headerContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  createAccountContainer: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  createAccountTextContainer: {
    marginHorizontal: 7,
  },
  inputContainer: {
    width: '90%',
    maxWidth: 380
  },
  signupButtonContainer: {
    alignItems: 'center',
    width: '100%',
    margin: 24
  },
  loginContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    
  },
  textInput: {
    marginVertical: 6,
    width: '100%'
  },
  signupButton: {
    width: '90%',
    maxWidth: 380
  }
})

const SignUp = ({ navigation }: StackNavigationProps<AuthenticationRoutes, 'SignUp'>) => {
  UIManager.setLayoutAnimationEnabledExperimental(true)
  const [name, onChangeName] = useState('')
  const [email, onChangeEmail] = useState('')
  const [password, onChangePassword] = useState('')
  const [confirmPassword, onChangeConfirmPassword] = useState('')

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', keyboardDidHide);
    }
  })

  const keyboardDidShow = () => {
  }

  const keyboardDidHide = () => {
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{marginBottom: 10}}>
          <View style={styles.createAccountTextContainer}>
            <Text style={styles.createAccountText}>Create</Text>
          </View>
          <View style={styles.createAccountTextContainer}>
            <Text style={styles.createAccountText}>Account</Text>
          </View>
        </View>
      </View>
      <View style={styles.createAccountContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Name'
            style={styles.textInput}
            onChangeText={(text) => onChangeName(text)}
          />
          <TextInput
            placeholder='Email'
            style={styles.textInput}
            onChangeText={(text) => onChangeEmail(text)}
          />
          <TextInput
            placeholder='Password'
            style={styles.textInput}
            onChangeText={(text) => onChangePassword(text)}
          />
          <TextInput
            placeholder='Confirm password'
            style={styles.textInput}
            onChangeText={(text) => onChangeConfirmPassword(text)}
          />
        </View>
        <View style={styles.signupButtonContainer}>
          <Button
            label='Sign up'
            onPress={() => navigation.navigate('General')}
            style={styles.signupButton}
          />
        </View>
      </View>
      <LoginNavigator
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default SignUp;
