import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { HomeScreen, ProfileScreen } from './Screens';

const RootDrawer = DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
});

export default RootDrawer;
