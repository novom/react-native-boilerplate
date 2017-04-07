import { combineReducers } from 'redux';

import navReducer from './NavigatorReducer';

const AppReducer = combineReducers({
  nav: navReducer,
});

export default AppReducer;
