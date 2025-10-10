import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Contact from './src/screens/Contact';
import About from './src/screens/About';
import Course from './src/screens/Course';
import UserData from './src/screens/UserData';

export default function App() {

  const Stack = createNativeStackNavigator();

  return <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      {/*home screen */}
      <Stack.Screen name="Home">
      {(props) =><Home {...props} channelName={'Online Edu System'} />}
      </Stack.Screen>
     {/*course screen */}
      <Stack.Screen name="Course" component={Course} />
      
       {/*userData screen */}
      <Stack.Screen name="Student" component={UserData} />


     {/*About screen */}
      <Stack.Screen name="About" component={About} />

      {/*contact screen */}
      <Stack.Screen name="Contact" component={Contact} />

    </Stack.Navigator>
  </NavigationContainer>
}