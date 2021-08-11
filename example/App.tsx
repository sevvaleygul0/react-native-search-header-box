/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
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
        <SearchHeaderBox
          headerText="Main Service"
          placeholder="Search Here.."
          rightButtonContainerStyle={{
            backgroundColor: '#50C479',
            borderRadius: 12,
            paddingLeft: 12,
            paddingRight: 12,
            paddingTop: 3,
            paddingBottom: 3,
            justifyContent: 'center',
            alignItems: 'center',
            width: 55,
            height: 30,
          }}
          rightButtonComponent={
            <Text style={{color: '#fff', fontWeight: '700'}}>New</Text>
          }
          inputActiveBorderColor="#6AB786"
          inputBorderColor="#C9F6D9"
        />
      </SafeAreaView>
    </>
  );
};

export default App;
