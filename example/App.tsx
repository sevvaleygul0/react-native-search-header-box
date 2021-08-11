/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import SearchHeaderBox from './lib/searchHeader/SearchHeaderBox';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          alignItems: 'center',
          paddingTop: 40,
          backgroundColor: '#EDEDED',
          flex: 1,
        }}>
        <SearchHeaderBox />
      </SafeAreaView>
    </>
  );
};

export default App;
