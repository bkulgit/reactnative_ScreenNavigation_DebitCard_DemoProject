/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StatusBar, StyleSheet} from 'react-native';

import HomeScreenView from './src/screens/HomeScreenView/HomeScreenView';

import {Provider} from 'react-redux';
import appStore from './src/Store/AppStore/Store';

const App: () => Node = () => {
  StatusBar.setBackgroundColor('#0b5f6d');
  return (
    <Provider store={appStore}>
      <HomeScreenView />
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
