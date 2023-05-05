import * as React from 'react';  
import { View, Text } from 'react-native';
    
export default function Header() {
    return (
      <View style={{ flex: 0.2, backgroundColor: '#F4CE14', textAlign: 'center' }}>
        <Text 
          style={{padding: 10, fontSize: 30, color: 'black', backgroundColor: 'pink' }}  
          numberOfLines={1}>
          Little Lemon
        </Text>
      </View>
    );
}