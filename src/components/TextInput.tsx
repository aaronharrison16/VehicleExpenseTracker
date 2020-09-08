import React from 'react';
import { TextInput as ReactNativeTextInput } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { palette } from './Theme';

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: palette.cadet,
    padding: 10,
    color: 'white',
    borderRadius: 8,
    fontSize: 25,
  }
})

interface TextProps {
  onChangeText: (arg0: string) => void;
  style?: object;
  placeholder: string;
}

const TextInput = ({ onChangeText, style, placeholder }: TextProps) => {
  return (
    <ReactNativeTextInput
      style={[styles.textInput, style]}
      {...{ onChangeText, placeholder }}
    />
  )
}

export default TextInput;
