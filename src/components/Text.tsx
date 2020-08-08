import React from 'react';
import { Text as ReactNativeText } from 'react-native';
import { useTheme } from '@react-navigation/native';

interface TextProps {
  style?: object,
  children: React.ReactNode
}

const Text = (props: TextProps) => {
  const { colors } = useTheme();
  const color = colors.text
  const styles = [{ color }, props.style]
  return (
    <ReactNativeText style={styles}>{props.children}</ReactNativeText>
  )
}

export default Text;
