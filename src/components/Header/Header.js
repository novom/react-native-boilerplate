import React, { PropTypes } from 'react';
import {
  Body,
  Button,
  Header,
  Icon,
  Left,
  Right,
  Title,
} from 'native-base';

// Define props types
const propTypes = {
  back: PropTypes.bool,
  navigation: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
};

// Define default props
const defaultProps = {
  back: false,
};

/**
 * Create a custom header component from NativeBase to handle the title and the left button
 */
const CustomHeader = props => (
  <Header>
    <Left>
      {
        props.back ? (
          <Button
            onPress={() => props.navigation.goBack()}
            transparent
          >
            <Icon name="arrow-back" />
          </Button>
        ) : (
          <Button
            onPress={() => props.navigation.navigate('DrawerOpen')}
            transparent
          >
            <Icon name="menu" />
          </Button>
        )
      }
    </Left>
    <Body>
      <Title>{props.title}</Title>
    </Body>
    <Right />
  </Header>
);

CustomHeader.propTypes = propTypes;
CustomHeader.defaultProps = defaultProps;

export default CustomHeader;
