import React, { PropTypes } from 'react';
import { Button, Container } from 'native-base';
import { Text, View } from 'react-native';

import Header from '../../components/Header/Header';
import styles from './styles';

const propTypes = {
  navigation: PropTypes.shape().isRequired,
};

const About = props => (
  <Container>
    <Header
      navigation={props.navigation}
      title="About"
    />

    <View style={styles.container}>
      <Text style={styles.welcome}>
        About!
      </Text>
    </View>

    <View style={styles.container}>
      <Button
        block
        info
        onPress={() => props.navigation.navigate('Subpage')}
      >
        <Text style={styles.textButton}>Navigate to subpage</Text>
      </Button>
    </View>
  </Container>
);

About.propTypes = propTypes;

export default About;
