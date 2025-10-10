import { StyleSheet, Text, View,TextInput , Touchable, TouchableOpacity, Alert } from "react-native";
import React , { useState } from "react";
import CheckBox from "expo-checkbox";
import UserData from "./UserData";


const Contact = ({navigation}) => {
    
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [mobile, setMobile] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [isChecked, setChecked] = React.useState(false);

    const submit = () =>{
       if(!name && !email && !mobile && !message){
        Alert.alert("Please fill all the fields")
        return;
       }
       else{
        Alert.alert(`Thank you ${name} `);
        navigation.navigate('Home');
       }
    };


    return ( 
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}> Level up your knowledge</Text>

            <Text style={styles.description}>
                You can reach us anytime via xxx@gmail.com
            </Text>

        <View style={styles.inputContainer}>

            <Text style={styles.labels}>Enter your name</Text>
            <TextInput 
                style={styles.inputStyle}
                placeholder={"Shilpa Sinha"}
                value={name}
                onChangeText={(UserData) => setName(UserData)}
            />
        </View>

         <View style={styles.inputContainer}>

            <Text style={styles.labels}>Enter your Email</Text>
            <TextInput 
                style={styles.inputStyle}
                placeholder={"demo@gmail.com"}
                value={email}
                onChangeText={(email) => setEmail(email)}
            />
        </View>

         <View style={styles.inputContainer}>

            <Text style={styles.labels}>Enter your Mobile Number</Text>
            <TextInput 
                style={styles.inputStyle}
                placeholder={"1234567890"}
                value={mobile}
                onChangeText={(mobile) => setMobile(mobile)}
            />
        </View>

        <View style={styles.inputContainer}>

            <Text style={styles.labels}>How can I help you?</Text>
            <TextInput 
                style={[styles.inputStyle, styles.multilineStyle]}
                placeholder={"Tell us about yourself"}
                value={message}
                onChangeText={(message) => setMessage(message)}
                numberOfLines={5}
                multiline={true}
            />
        </View>

        {/* checkbox */}
          <View style={styles.wrapper}>
          <CheckBox  
            value={isChecked}
            onValueChange={()=>setChecked(!isChecked)}
            color={isChecked ? "#4630EB" : "grey"}

          />
          <Text style={styles.wrapperText}> I have read and agreed with the TC</Text>

           </View>
           {/*submit button */}
           <TouchableOpacity
           style={[styles.buttonStyle,{
                    backgroundColor: isChecked ? "#4630EB" : "grey",
           },
           ]}
            disabled={!isChecked}
           onPress={submit}>

            <Text style={styles.buttonText}>Contact Us</Text>
           </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        height:"100%",
        paddingHorizontal:30,
        flex: 1,
        padding: 20,
        backgroundColor: "#f0f0f0"
    },
    mainHeader: {
        fontSize: 24,
        fontWeight: "500",
        paddingTop:20,
        paddingBottom:15,
        fontFamily: 'JosefinSans_500Medium',
        marginBottom: 10,
        textTransform: "capitalize",
        textAlign: "center"
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: "center",
        paddingBottom: 20,
        fontFamily: 'JosefinSans_400Regular',
        lineHeight:25
    },
    inputContainer: {
        marginBottom: 15
    },
    labels: {
        fontWeight: "bold",
        color:"#7d7d7d",
        paddingBottom:5,
        fontFamily: 'JosefinSans_400Regular',
        fontSize: 14,
        marginBottom: 5
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 8,
        padding: 10,
        backgroundColor: "#fff"
    },
    multilineStyle: {
        height: 100,
        textAlignVertical: "top",
        paddingVertical:4,
    },
    buttonStyle:{
        borderRadis:5,
        paddingVertical:10,
        paddingHorizontal:18,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginVertical:30,
    },
    buttonText:{
        color:"#eee"
    },
    wrapper:{
        display:"flex",
        flexDirection:"row",
        marginTop:20,
        fontFamily: 'JosefinSans_400Regular',
    },
    wrapperText:{
        marginLeft:10,
        color:"#7d7d7d",
        fontFamily: 'JosefinSans_400Regular',
    }
})

export default Contact;