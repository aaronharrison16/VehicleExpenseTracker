import React from 'react'
import { RectButton } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

import Text from './Text'
import { palette } from './Theme';


const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: palette.light,
    fontSize: 18
  }
})

interface ButtonProps {
  variant: string;
  label: string;
  onPress: () => void;
}

const Button = ({ variant, label, onPress }: ButtonProps) => {
  const backgroundColor = variant === 'primary' ? palette.cederChest : palette.cadet
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}  
    >
      <Text style={styles.text}>{label}</Text>
    </RectButton>
  )
}

Button.defaultProps = { variant: 'default' };

export default Button;
