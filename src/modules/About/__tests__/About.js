/* eslint-disable no-undef */

import 'react-native';

import React from 'react';
import renderer from 'react-test-renderer';

import About from '../About';

it('renders About module correctly', () => {
  const tree = renderer.create(
    <About navigation={{}} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
