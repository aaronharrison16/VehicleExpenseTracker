import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet
} from 'react-native';
import { Button } from '../../components';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  contianer: {
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
    backgroundColor: 'white',
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
  last: string;
  onPress: () => void;
}

const Slide = ({ title, description, last, onPress }: SlideProps) => {
  return (
    <View style={styles.contianer}>
      <View style={styles.image}>
        <Text>TODO IMAGE</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{ title }</Text>
          <Text>{ description }</Text>
          <Button
            label={last ? "Let's Go!" : 'Next' }
            variant={last ? "primary" : "default"}
            {...{ onPress }}
          />
        </View>
      </View>
    </View>
  );
};

export default Slide;