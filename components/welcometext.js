import * as React from 'react';  
import { View, Text, StyleSheet } from 'react-native';
    
export default function Welcometext() {
    return (
      <><View
          style={{
            flex: 0.2
          }}><Text 
            style={{padding: 10, fontSize: 25, color: 'white', textAlign: 'center'}}  
            numberOfLines={1}>
            Welcome to Little Lemon
          </Text></View><View
          style={{
            flex: 0.5,
            backgroundColor: 'red'
          }}><Text style={{ padding: 15, fontSize: 20, textAlign: 'center' }}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
          </Text></View></>
    );
}