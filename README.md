React Native Boilerplate
=======================

[![React Native](https://img.shields.io/badge/React%20Native-v0.42-blue.svg)](https://facebook.github.io/react-native/)
[![React Navigation](https://img.shields.io/badge/React%20Navigation-v1.0-blue.svg)](https://reactnavigation.org/)
[![NativeBase](https://img.shields.io/badge/NativeBase-v2.1-blue.svg)](https://nativebase.io/)

[![CircleCI](https://circleci.com/gh/novom/react-native-boilerplate/tree/master.svg?style=shield)](https://circleci.com/gh/novom/react-native-boilerplate/tree/master)

React Native Boilerplate is a starting point for React Native application.

## Features

* [Redux](http://redux.js.org/)
* [React Navigation](https://reactnavigation.org/) (with drawer)
* [Jest](https://facebook.github.io/jest/)
* [NativeBase](https://nativebase.io/) (UI Kit)
* [CircleCI](https://circleci.com/)
* [Eslint](http://eslint.org/) ([Airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))

## Prerequisites

* [Node](https://nodejs.org) v6.10 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
* [Yarn](https://yarnpkg.com/)
* A development machine set up for React Native by following [these instructions](https://facebook.github.io/react-native/docs/getting-started.html)

## Getting Started

1. Clone this repo, `git clone git@github.com:novom/react-native-boilerplate.git <your project name>`
2. Go to project's root directory, `cd <your project name>`
3. Remove `.git` folder,  `rm -rf .git`
4. Open `package.json` and change the `name` property with your project name
5. Run `yarn` to install dependencies
6. Run `react-native upgrade` to update the project name to `android` and `ios` build
  * Type `y` to each prompt
8. Run `rm -rf android/app/src/main/java/com/reactnativeboilerplate`
9. Run `rm -rf ios/ReactNativeBoilerplate`
10. Run `react-native link`
11. Open `src/app/App.js` and replace `'ReactNativeBoilerplate'` by your project name
12. Copy `settings/development.sample.json` to `settings/development.json` and adapt its contents to your needs
13. Open `environment.json` and set the desired execution environment
14. Start the packager with `yarn start`
15. Connect a mobile device to your development machine
16. Run the test application:
  * On Android:
    * Run `react-native run-android`
  * On iOS:
    * Open `ios/VillageQuebecoisAntan.xcodeproj` in Xcode
    * Hit `Run` after selecting the desired device
17. Have fun!

## How To

### Run Tests

* Linter: `yarn lint`
* Unit tests: `yarn test`
* Unit tests (watch mode): `yarn test:watch`
* Code coverage: `yarn test:coverage`

## Contributing

**Never** commit directly on master, instead use branches and pull requests.

You must use the following Style Guides :

* [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
* [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

This project contains a linting config, you should setup `eslint` into your IDE with `.eslintrc.js`.
