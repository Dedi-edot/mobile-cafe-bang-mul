/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StackNavigator from './StackNavigator';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';

const AppStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="Login" component={Login} />
      <AppStack.Screen name="Register" component={Register} />
      <AppStack.Screen name="StackNavigator" component={StackNavigator} />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
