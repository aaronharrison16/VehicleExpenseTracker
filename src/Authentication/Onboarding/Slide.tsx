import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet
} from 'react-native';
import { Button, Text } from '../../components';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width,
    height: '100%'
  },
  image: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomContainer: {
    flex: 1,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title: {
    fontSize: 50
  }
});

interface SlideProps {
  title: string;
  description: string;
}

const Slide = ({ title, description }: SlideProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Text>TODO IMAGE</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{ title }</Text>
          <Text>{ description }</Text>
        </View>
      </View>
    </View>
  );
};

export default Slide;