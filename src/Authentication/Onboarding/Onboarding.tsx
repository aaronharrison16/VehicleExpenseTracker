import React, { useRef } from 'react';
import { View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { divide, color } from 'react-native-reanimated';
import Slide from './Slide';
import Dot from './Dot';
import { useScrollHandler } from 'react-native-redash';
import { StackNavigationProps, Routes } from '../../components/Navigation';
import { Button, Text } from '../../components';
import { useTheme } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  slider: {
    flex: 4,
  },
  paginationContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  authenticationContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  signInContainer: {
    flexDirection: 'row'
  }
});

const slides = [
  {
    title: 'Slide 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Slide 2',
    description: 'consectetur adipiscing elit. Pellentesque'
  },
  {
    title: 'Slide 3',
    description: 'fringilla odio turpis, sed commodo ligula condimentum ut'
  },
];

const Onboarding = ({ navigation }: StackNavigationProps<Routes, "Onboarding">) => {
  const { colors } = useTheme();
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          pagingEnabled
          { ...scrollHandler}
        >
          {slides.map(({ title, description }, index) => {
            const last = index === slides.length - 1

            return (
              <Slide
                key={index}
                {...{title, description, last}}
                // onPress={() => {
                //   if (last) {
                //     navigation.navigate('Welcome')
                //   } else {
                //     scroll.current
                //     ?.getNode().scrollTo({ x: width * (index + 1), animated: true })
                //   }
                // }}  
              />
            )
          })}
        </Animated.ScrollView>
      </View>
      <View style={styles.paginationContainer}>
        {slides.map((_, index) => (
          <Dot
            key={index}
            currentIndex={divide(x, width)}
            { ...{index}}
          />
        ))}
      </View>
      <View style={styles.authenticationContainer}>
        <Button
          label='Create account'
          onPress={() => {navigation.navigate('SignUp')}}
        />
        <View style={styles.signInContainer}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
            <Text style={{color: colors.notification}}>
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
