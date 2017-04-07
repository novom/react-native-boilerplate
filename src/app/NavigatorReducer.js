import Routes from './Routes';

const navReducer = (state, action) => {
  const newState = Routes.router.getStateForAction(action, state);
  return newState || state;
};

export default navReducer;
