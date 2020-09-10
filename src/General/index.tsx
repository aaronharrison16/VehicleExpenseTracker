import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { GeneralRoutes } from '../Navigation/Navigation';
import Home from './Home'

const GeneralStack = createStackNavigator<GeneralRoutes>();
export const GeneralNavigator = () => (
  <GeneralStack.Navigator headerMode="none">
    <GeneralStack.Screen name="Home" component={Home} />
  </GeneralStack.Navigator>
);