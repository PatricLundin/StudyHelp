/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Home from './screens/Home/Home';
import Course from './components/Course/Course';
import CourseQuestions from './components/CourseQuestions/CourseQuestions'

import InfoTab from "./screens/InfoTab/InfoTab";
import Settings from "./screens/Settings/Settings";

const HomeScreen = StackNavigator({
  Home: {
    screen: Home,
    path: '/',
    navigationOptions: {
      title: 'Home',
    },
  },
  Course: {
    screen: Course,
    path: '/Course',
    navigationOptions: {
      title: 'Course',
    },
  },
  CourseQuestions: {
    screen: CourseQuestions,
    path: '/CourseQuestions',
    navigationOptions: {
      title: 'CourseQuestions',
    },
  }
});

const InfoScreen = StackNavigator({
  Info: {
    screen: InfoTab,
    path: '/',
    navigationOptions: {
      title: 'Info',
    },
  },
});

const SettingsScreen = StackNavigator({
  Settings: {
    screen: Settings,
    path: '/',
    navigationOptions: {
      title: 'Settings',
    },
  },
});

export default MainScreenNavigator = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        tabBarLabel: 'Home'
      }
    },
    InfoTab: {
      screen: InfoScreen,
      navigationOptions: {
        title: 'Info',
        tabBarLabel: 'Info',
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Settings',
        tabBarLabel: 'Settings',
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

