import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import About from '../modules/About/About';
import Home from '../modules/Home/Home';
import Menu from '../components/Menu/Menu';
import Subpage from '../modules/Subpage/Subpage';

// These routes will be displayed in the drawer
const drawerRoutes = {
  Home: {
    screen: Home,
    navigationOptions: {
      drawer: {
        label: 'Home',
      },
    },
  },
  About: {
    screen: About,
    navigationOptions: {
      drawer: {
        label: 'About',
      },
    },
  },
};

// These routes will NOT be displayed in the drawer
const stackRoutes = {
  Subpage: {
    screen: Subpage,
  },
};

/**
 * Options for stackNavigator
 * https://reactnavigation.org/docs/navigators/stack
 */
const stackNavigatorOptions = {
  headerMode: 'none',
  initialRouteName: 'Drawer',
};

/**
 * Options for drawerNavigator
 * https://reactnavigation.org/docs/navigators/drawer
 */
const drawerNavigatorOptions = {
  contentComponent: props => <Menu {...props} />,
};

export default StackNavigator({
  ...stackRoutes,
  Drawer: {
    screen: DrawerNavigator(drawerRoutes, drawerNavigatorOptions),
  },
}, stackNavigatorOptions);
