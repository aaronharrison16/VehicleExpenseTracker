import React, { useRef } from 'react';
import { View, Dimensions, StyleSheet, SafeAreaView } from 'react-native';
import Animated, { divide } from 'react-native-reanimated';
import Slide from './Slide';
import Dot from './Dot';
import { useScrollHandler } from 'react-native-redash';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  slider: {
    flex: 1,
  },
  paginationContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
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

const Onboarding = () => {
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
          {slides.map(({ title, description }, index) => (
            <Slide
              key={index}
              {...{title, description}}
              last={index === slides.length - 1}
              onPress={() => {
                if (scroll.current) {
                  scroll.current.getNode().scrollTo({ x: width * (index + 1), animated: true })
                } 
              }}  
            />
          ))}
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
    </View>
  );
};

export default Onboarding;
