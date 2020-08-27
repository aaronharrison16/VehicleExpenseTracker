import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button } from '../../components';
import { StackNavigationProps, Routes } from '../../components/Navigation';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    backgroundColor: 'grey',
    padding: 0,
    margin: 3
  }
})

const SignUp = ({ navigation }: StackNavigationProps<Routes, 'SignUp'>) => {
  const [name, onChangeName] = useState('')
  const [email, onChangeEmail] = useState('')
  const [password, onChangePassword] = useState('')

  return (
    <View style={styles.container}>
      <View>
        <Text>Create</Text>
        <Text>Account</Text>
      </View> 
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <View>
        <TextInput
          style={styles.textInput}  
          onChangeText={(text) => onChangeName(text)}
        />
        <TextInput
          style={styles.textInput}  
          onChangeText={(text) => onChangeEmail(text)}
        />
        <TextInput
          style={styles.textInput}  
          onChangeText={(text) => onChangePassword(text)}
        />
      </View>
      {/* <View style={{height: 180, justifyContent: 'center', alignItems: 'center', borderTopColor: 'white', borderTopWidth: 1}}>
        <Text>Sign in using</Text>
        <Text>TODO SOCIAL LOGINS AND SUCH</Text>
      </View> */}
    </View>
  );
};

export default SignUp;
