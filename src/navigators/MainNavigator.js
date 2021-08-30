/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Juice from '../screens/Juice';
import Kopi from '../screens/Kopi';
import Snack from '../screens/Snack';
import Teh from '../screens/Teh';

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 15,
  },
});

const BottomTab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        barStyle={{backgroundColor: '#000'}}
        screenOptions={({route}) => {
          return {
            tabBarIcon: ({focused}) => {
              let iconName;
              let color = focused ? 'blue' : 'black';
              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Juice') {
                iconName = 'beer';
              } else if (route.name === 'Kopi') {
                iconName = 'cafe';
              } else if (route.name === 'Teh') {
                iconName = 'leaf';
              } else if (route.name === 'Snack') {
                iconName = 'pizza';
              }
              return <Ionicons name={iconName} size={20} color={color} />;
            },
          };
        }}
        tabBarOptions={{
          activeTintColor: 'blue',
        }}>
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarLabel: () => (
              <View>
                <Text style={styles.tabLabel}>All</Text>
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name="Juice"
          component={Juice}
          options={{
            headerShown: false,
            tabBarLabel: () => (
              <View>
                <Text style={styles.tabLabel}>Juice</Text>
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name="Kopi"
          component={Kopi}
          options={{
            headerShown: false,
            tabBarLabel: () => (
              <View>
                <Text style={styles.tabLabel}>Kopi</Text>
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name="Teh"
          component={Teh}
          options={{
            headerShown: false,
            tabBarLabel: () => (
              <View>
                <Text style={styles.tabLabel}>Teh</Text>
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name="Snack"
          component={Snack}
          options={{
            headerShown: false,
            tabBarLabel: () => (
              <View>
                <Text style={styles.tabLabel}>Snack</Text>
              </View>
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
