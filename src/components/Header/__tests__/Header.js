/* eslint-disable no-undef */

import 'react-native';

import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../Header';

it('renders header with title and menu button', () => {
  const tree = renderer.create(
    <Header
      navigation={{}}
      title="Home"
    />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders header with title and back button', () => {
  const tree = renderer.create(
    <Header
      back
      navigation={{}}
      title="Home"
    />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
