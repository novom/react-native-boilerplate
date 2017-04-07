/* eslint-disable no-undef */

import 'react-native';

import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../Home';

it('renders Home module correctly', () => {
  const tree = renderer.create(
    <Home navigation={{}} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
