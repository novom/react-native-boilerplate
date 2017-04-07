import React, { PropTypes } from 'react';

import { addNavigationHelpers } from 'react-navigation';

import Routes from './Routes';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape().isRequired,
};

const Navigator = props => (
  <Routes
    navigation={addNavigationHelpers({
      dispatch: props.dispatch,
      state: props.nav,
    })}
  />
);

Navigator.propTypes = propTypes;

export default Navigator;
