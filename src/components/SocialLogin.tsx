import React from 'react';
import { View } from 'react-native';
import Text from './Text';
import Button from './Button';

const SocialLogin = () => {
  return (
    <View style={{height: 180, justifyContent: 'center', alignItems: 'center', borderTopColor: 'white', borderTopWidth: 1}}>
      <Text>TODO SOCIAL LOGINS AND SUCH</Text>
      <Button
        variant='transparent'
        onPress={() => {}}
        label='Go Back'
      />
    </View>
  )
}

export default SocialLogin;
