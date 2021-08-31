/* eslint-disable prettier/prettier */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Juice from '../screens/Juice';
import Kopi from '../screens/Kopi';
import Snack from '../screens/Snack';
import Teh from '../screens/Teh';

const BottomTab = createMaterialBottomTabNavigator();

const MainNavigator = () => {
  return (
    <BottomTab.Navigator barStyle={{backgroundColor: '#3a0ca3'}}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'All',
          tabBarIcon: ({color}) => (
            <Ionicons name="home" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Juice"
        component={Juice}
        options={{
          tabBarLabel: 'Juice',
          tabBarIcon: ({color}) => (
            <Ionicons name="beer" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Kopi"
        component={Kopi}
        options={{
          tabBarLabel: 'Kopi',
          tabBarIcon: ({color}) => (
            <Ionicons name="cafe" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Teh"
        component={Teh}
        options={{
          tabBarLabel: 'Teh',
          tabBarIcon: ({color}) => (
            <Ionicons name="leaf" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Snack"
        component={Snack}
        options={{
          tabBarLabel: 'Snack',
          tabBarIcon: ({color}) => (
            <Ionicons name="pizza" color={color} size={26} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default MainNavigator;
