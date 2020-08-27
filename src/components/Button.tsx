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
  }
})

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'transparent';
  label: string;
  onPress: () => void;
  style?: object;
  fontSize?: number
}

const Button = ({ variant, label, onPress, style, fontSize = 18 }: ButtonProps) => {
  var backgroundColor
  switch (variant) {
    case 'primary':
      backgroundColor = palette.cederChest
      break;
    case 'secondary':
      backgroundColor = palette.cadet
      break;
    case 'transparent':
      backgroundColor = palette.transparent
      break;
    default:
      backgroundColor = palette.cederChest
      break;
  }

  return (
    <RectButton
      style={[styles.container, style, { backgroundColor }]}
      {...{ onPress }}  
    >
      <Text style={[styles.text, { fontSize }]}>{label}</Text>
    </RectButton>
  )
}

Button.defaultProps = { variant: 'default' };

export default Button;
