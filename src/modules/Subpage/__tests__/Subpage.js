/* eslint-disable no-undef */

import 'react-native';

import React from 'react';
import renderer from 'react-test-renderer';

import Subpage from '../Subpage';

it('renders Subpage module correctly', () => {
  const tree = renderer.create(
    <Subpage navigation={{}} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
