import React, { PropTypes } from 'react';
import { Container } from 'native-base';
import { Text, View } from 'react-native';

import Header from '../../components/Header/Header';
import styles from './styles';

const propTypes = {
  navigation: PropTypes.shape().isRequired,
};

const Home = props => (
  <Container>
    <Header
      navigation={props.navigation}
      title="Home"
    />

    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native!
      </Text>

      <Text style={styles.instructions}>
        To get started, edit index.android.js
      </Text>

      <Text style={styles.instructions}>
        Double tap R on your keyboard to reload,{'\n'}
        Shake or press menu button for dev menu
      </Text>
    </View>
  </Container>
);

Home.propTypes = propTypes;

export default Home;
