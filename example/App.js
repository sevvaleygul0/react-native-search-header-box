/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  Image,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {SearchHeaderBox} from './lib/searchHeader/SearchHeaderBox';

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
          leftButtonBackgroundColor="transparent"
          headerTitleTextComponent={
            <Text style={{fontSize: 20, fontWeight: '800', color: 'purple'}}>
              Main Screen
            </Text>
          }
          rightButtonContainerStyle={{
            backgroundColor: '#BA8DB9',
            borderRadius: 20,
            paddingLeft: 12,
            paddingRight: 12,
            paddingTop: 3,
            paddingBottom: 3,
            justifyContent: 'center',
            alignItems: 'center',
            width: 55,
            height: 30,
          }}
          bottomContainerStyle={{
            width: '100%',
            height: 40,
            marginTop: 12,
            marginBottom: 8,
            borderRadius: 20,
            backgroundColor: '#D4AAD3',
            alignItems: 'center',
            paddingLeft: 12,
            paddingRight: 12,
            flexDirection: 'row',
          }}
          rightButtonComponent={
            <Text style={{color: '#fff', fontWeight: '700'}}>New</Text>
          }
          placeholderTextColor="#fff"
          leftIconComponent={
            <Image
              source={require('./assets/down-arrow.png')}
              style={{height: 20, width: 20}}
            />
          }
          searchIconComponent={
            <Image
              source={require('./assets/search.png')}
              style={{width: 20, height: 20}}></Image>
          }
          inputActiveBorderColor="#BA8DB9"
          inputBorderColor="#D4AAD3"
          onRightButtonPress={() => console.log('Right button')}
        />
        <Image
          source={require('./lib/local-assets/box.png')}
          style={{marginTop: 100, width: 180, height: 180}}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
