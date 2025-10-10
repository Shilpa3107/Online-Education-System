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
import CourseDetails from './src/screens/CourseDetails';
import { useFonts, JosefinSans_400Regular, JosefinSans_500Medium } from '@expo-google-fonts/josefin-sans';
import{  Nunito_600SemiBold,  Nunito_700Bold} from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';

export default function App() {

  const Stack = createNativeStackNavigator();
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if(!fontsLoaded){
   return <AppLoading/>
  }

  return <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      {/*home screen */}
      <Stack.Screen name="Home" options={{
        headerShown: false,
      }}>
      {(props) =><Home {...props} channelName={'Online Education System'} />}
      </Stack.Screen>
     {/*course screen */}
      <Stack.Screen name="Course" component={Course} 
      options={{
        headerTitleStyle:{
          fontSize: 25,
          fontFamily: 'Nunito_600SemiBold',
        },
        headerTitle:"Courses",
        headerTitleAlign: 'center',
      }}
      />
      
       {/*userData screen */}
      <Stack.Screen name="Student" component={UserData} 
         options={{
        headerTitleStyle:{
          fontSize: 25,
          fontFamily: 'Nunito_600SemiBold',
        },
        headerTitle:"Students Data",
        headerTitleAlign: 'center',
      }}
      />


     {/*About screen */}
      <Stack.Screen name="About" component={About} 
         options={{
        headerTitleStyle:{
          fontSize: 25,
          fontFamily: 'Nunito_600SemiBold',
        },
         headerTitleAlign: 'center',
      }}
      />

      {/*contact screen */}
      <Stack.Screen name="Contact" component={Contact} 
         options={{
        headerTitleStyle:{
          fontSize: 25,
          fontFamily: 'Nunito_600SemiBold',
        },
        headerTitleAlign: 'center',
      }}
      />

      {/*CourseDetails screen */}
      <Stack.Screen name="CourseDetails" component={CourseDetails} 
         options={{
        headerTitleStyle:{
          fontSize: 25,
          fontFamily: 'Nunito_600SemiBold',
        },
        headerTitleAlign: 'center',
      }}
      />

    </Stack.Navigator>
  </NavigationContainer>
}