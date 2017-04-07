import React from 'react';

import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AppReducer from './AppReducer';
import NavigatorContainer from './NavigatorContainer';

const store = createStore(AppReducer);

// Uncomment for debug
// store.subscribe(() =>
//   console.log(store.getState()),
// );

const App = () => (
  <Provider store={store}>
    <NavigatorContainer />
  </Provider>
);

AppRegistry.registerComponent('ReactNativeBoilerplate', () => App);
