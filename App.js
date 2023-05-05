import * as React from 'react';
import { View } from 'react-native';

import Header from './components/header';
import Footer from './components/footer';
import Welcometext from './components/welcometext';
export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}>
        <Header />
        <Welcometext />
      </View>

      <View
        style={{
        }}><Footer style={{backgroundColor: 'red'}}/></View>
    </>
  );
}