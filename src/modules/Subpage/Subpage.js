import React, { PropTypes } from 'react';
import { Container } from 'native-base';
import { Text, View } from 'react-native';

import Header from '../../components/Header/Header';
import styles from './styles';

const propTypes = {
  navigation: PropTypes.shape().isRequired,
};

const Subpage = props => (
  <Container>
    <Header
      back
      navigation={props.navigation}
      title="Subpage"
    />

    <View style={styles.container}>
      <Text style={styles.welcome}>
        Subpage!
      </Text>
    </View>
  </Container>
);

Subpage.propTypes = propTypes;

export default Subpage;
