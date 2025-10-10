import { StyleSheet, Text, TouchableOpacity, View,Image } from "react-native";
import { Linking } from "react-native";
import React from "react";

const About = () => {
    return ( 
        <View style={styles.aboutContainer}>
            <Text style={styles.mainHeader}> Shilpa Sinha </Text>
            <Text style= {styles.paraStyle}> I am Software Developer 😁</Text>
        
        <View>
            <Image
               style = {styles.imgStyle}
               source={{
                uri:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                }}
            />
        </View>

        <View style = {styles.aboutLayout}>
            <Text style={styles.aboutSubHeader}>About Me</Text>
            <Text style = {[styles.paraStyle,styles.aboutPara]}> I am a software developer with a passion for creating innovative solutions that make a difference. With a strong background in computer science and a keen eye for detail, I specialize in developing user-friendly applications that meet the needs of modern users. "</Text>
        </View>

        <Text style={styles.mainHeader}>Follow me on Social Network</Text>
        <View style={styles.menuContainer}>
            <TouchableOpacity 
            style={styles.buttonStyle}
           onPress={()=> Linking.openURL('https://www.instagram.com/shilpa_3_1/')}>
            <Image 
              style = {styles.iconStyle}
              source={{uri:"https://cdn-icons-png.flaticon.com/512/2111/2111463.png"}}  />
            </TouchableOpacity>

             <TouchableOpacity 
            style={styles.buttonStyle}
           onPress={()=> Linking.openURL('https://www.youtube.com/@shilpa3124')}>
            <Image 
              style = {styles.iconStyle}
              source={{uri:"https://cdn-icons-png.flaticon.com/512/187/187210.png"}}  />
            </TouchableOpacity>

             <TouchableOpacity 
            style={styles.buttonStyle}
           onPress={()=> Linking.openURL('https://www.youtube.com/@shilpa3124')}>
            <Image 
              style = {styles.iconStyle}
              source={{uri:"https://cdn-icons-png.flaticon.com/512/906/906361.png"}}  />
            </TouchableOpacity>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    aboutContainer:{
        display:"flex",
        alignItems: 'center',
    },
    imgStyle:{
        width: 150,
        height:150,
        borderRadius: 100,
    },
    mainHeader:{
        fontSize: 18,
        color: '#344055',
        textTransform: 'uppercase',  
        fontFamily: 'JosefinSans_700Bold',
        marginTop: 50,
        marginBottom: 10,
        fontWeight:"500",
    },
    paraStyle:{
        fontSize: 18,
        color: '#7d7d7d',
        paddingBottom: 30,
    },
    aboutLayout:{
        backgroundColor: '#4c5dab',
        paddingHorizontal: 30,
        marginVertical: 30,
    },
    aboutSubHeader:{
        fontSize: 18,
        color:"#fff",
        textTransform: 'uppercase',  
        fontFamily: 'JosefinSans_700Bold',
        marginVertical: 15, 
        alignSelf: 'center',
        fontWeight:"500",
    },
    aboutPara:{
        color:"#fff",
    },
    menuContainer:{
        width:"100%",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom: 30,
    },
    iconStyle:{
        width: "100%",
        height: 50,
        aspectRatio: 1,
    }
})

export default About;