import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { interpolate, Extrapolate } from 'react-native-reanimated';
import { palette } from '../../components/Theme';

const styles = StyleSheet.create({
  dot: {
    backgroundColor: palette.cederChest,
    height: 8,
    width: 8,
    borderRadius: 4,
    margin: 4
  }
})

interface DotProps {
  index: number;
  currentIndex: number;
}

const Dot = ({ index, currentIndex }: DotProps) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP
  })
  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP
  })

  return (
    <Animated.View
      key={index}
      style={[
        styles.dot,
        {
          opacity,
          transform: [{ scale }]
        }
      ]}
    />
  )
}

export default Dot;
