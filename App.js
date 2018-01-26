/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Home from './screens/Home/Home';
import InfoTab from "./screens/InfoTab/InfoTab";
import Settings from "./screens/Settings/Settings";


const MainScreenNavigator = TabNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
        tabBarLabel: 'Home'
      }
    },
    InfoTab: {
      screen: InfoTab,
      navigationOptions: {
        title: 'Info',
        tabBarLabel: 'Info',
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        title: 'Settings',
        tabBarLabel: 'Settings',
      }
    }
  }, {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  });

export default SimpleApp = StackNavigator({
  App: { screen: MainScreenNavigator },
});