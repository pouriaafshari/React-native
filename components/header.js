import * as React from 'react';  
import { View, Text, StyleSheet } from 'react-native';
    
export default function Header() {
    return (
      <View style={{ flex: 0.2, backgroundColor: '#F4CE14' }}>
        <Text 
          style={{padding: 50, fontSize: 30,  textAlign: 'center'}}  
          numberOfLines={1}>
          Little Lemon
        </Text></View>
    );
}