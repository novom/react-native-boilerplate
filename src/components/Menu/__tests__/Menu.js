/* eslint-disable no-undef */

import 'react-native';

import React from 'react';
import renderer from 'react-test-renderer';

import Menu from '../Menu';

const defaultProps = {
  getLabel: () => {},
  navigation: {
    state: {
      routes: [
        { key: 'Home', routeName: 'Home' },
        { key: 'About', routeName: 'About' },
      ],
    },
  },
  renderIcon: () => {},
};

it('renders menu correctly', () => {
  const tree = renderer.create(
    <Menu {...defaultProps} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
