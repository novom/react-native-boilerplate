import { connect } from 'react-redux';

import Navigator from './Navigator';

const mapStateToProps = state => ({
  nav: state.nav,
});

const mapDispatchToProps = dispatch => Object.assign({ dispatch });

const NavigatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigator);

export default NavigatorContainer;
