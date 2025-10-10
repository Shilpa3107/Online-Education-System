import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Menu from "../component/Menu";

const Home = (props) => {
const description = "We are committed to providing quality education to learners worldwide. Our platform offers a wide range of courses, expert instructors, and flexible learning options to help you achieve your educational goals.";
  return (
    <View style = {styles.mainContainer}>
    <View style = {styles.homeTop}>
      <Image style={styles.headerImage}
      resizeMode='contain'
      source={require('../../assets/logo.jpg')}
      />
      <Text style={styles.mainHeader}>Welcome to</Text>
      <Text style={[
        styles.mainHeader,{
           fontSize: 33,
           color: '#4c5dab',
           marginTop: 0
      }
      ]}>{props.channelName}</Text>
      <Text style = {styles.paraStyle}>{ description }</Text>
    </View>

   <View style={styles.menuStyle}>
   <View style = {styles.lineStyle}></View>
    <Menu/>
    <View style = {[styles.lineStyle, {
      marginVertical: 30,
      },
      ]}></View>
   </View>
    </View>
  );
}

const styles = StyleSheet.create({
 mainContainer:{
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  paddingHorizontal: 20,
  backgroundColor: '#fff',
  textAlign: 'center',
 },

 homeTop:{
  display: 'flex',
  justifyContent:'center',
  alignItems: 'center',
  paddingHorizontal:10,
 },

 headerImage:{
  height: undefined,
  width: '100%',
  aspectRatio : 1,
  display: 'flex',
  alignItems:'stretch',
  marginTop: 50,
  borderRadius:40
 },

 mainHeader:{
  fontSize: 30,
  color: '#344055',
  textTransform: 'uppercase',
  fontFamily: 'Nunito_600SemiBold',
 },

 paraStyle:{
  textAlign: 'left',
  fontSize: 19,
  color: '#7d7d7d',
  marginTop:30,
  paddingBottom:50,
  lineHeight: 26,
  fontFamily: 'JosefinSans_400Regular',
 },
 lineStyle:{
  marginBottom: 5,
  borderWidth:0.5,
  borderColor:"grey"
 },
});


export default Home;

