import React from 'react'
import { RectButton } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 18
  }
})

interface ButtonProps {
  variant: string;
  label: string;
  onPress: () => void;
}

const Button = ({ variant, label, onPress }: ButtonProps) => {
  const backgroundColor = variant === 'primary' ? '#DB504A' : '#4F6D7A'
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}  
    >
      <Text>{label}</Text>
    </RectButton>
  )
}

Button.defaultProps = { variant: 'default' };

export default Button;
