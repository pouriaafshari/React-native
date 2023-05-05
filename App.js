import * as React from 'react';
import { View } from 'react-native';

import Header from './components/header';
import Footer from './components/footer';
export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}>
        <Header />
      </View>

      <Footer style={{ backgroundColor: '#495E57' }} />
    </>
  );
}