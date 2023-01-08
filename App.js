import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Images from './Images/Images';
import ListScreen from './Screens/ListScreen';
import RandomizerScreen from './Screens/RandomizerScreen';
import SwipeScreen from './Screens/SwipeScreen';
import AddScreen from './Screens/AddScreen';
import styles from './stylesheet';

export const DEFAULT_BLUE = '#255075';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerTintColor: 'white',
          headerStyle: {backgroundColor: DEFAULT_BLUE},
          tabBarStyle: {height: 60},
          tabBarLabelStyle: {fontSize: 13, marginBottom: 5},
          tabBarIcon: ({ color, size }) => {
            switch(route.name) {
              case 'List':
                return <Image style={styles.tabIcon} source={Images.list} size={size} color={color}/>;
              case 'Randomizer':
                return <Image style={styles.tabIcon} source={Images.randomizer} size={size} color={color}/>;
              case 'Swipe':
                return <Image style={styles.tabIcon} source={Images.swipe} size={size} color={color}/>;
              case 'Add':
                return <Image style={styles.tabIcon} source={Images.add} size={size} color={color}/>;
            }
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'black',
          tabBarActiveBackgroundColor: DEFAULT_BLUE,
          tabBarInactiveBackgroundColor: 'white',
          tabBarHideOnKeyboard: true
        })}
      >
        <Tab.Screen name="List" component={ListScreen} />
        <Tab.Screen name="Randomizer" component={RandomizerScreen} />
        <Tab.Screen name="Swipe" component={SwipeScreen} />
        <Tab.Screen name="Add" component={AddScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}