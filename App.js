import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import Home from './src/screens/Home';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  const Stack = createNativeStackNavigator();

  return <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home">
      {(props) =><Home {...props} channelName={'Online Edu System'} />}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
}