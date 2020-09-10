import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { AuthenticationRoutes } from '../Navigation/Navigation';
import Onboarding from './Onboarding';
import Welcome from './Welcome';
import Login from './Login';
import SignUp from './SignUp';
import Splash from './Splash';

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>();
export const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen name="Splash" component={Splash} />
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
    <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    <AuthenticationStack.Screen name="Login" component={Login} />
    <AuthenticationStack.Screen name="SignUp" component={SignUp} />
  </AuthenticationStack.Navigator>
);