import { StyleSheet, Text, View , FlatList, Image} from "react-native";
import React, {useState , useEffect} from "react";

const UserData = () => {
    const [myData,setMyData] = useState([]);

    const getUserData = async() =>{
       try{
        const response = await fetch("https://thapatechnical.github.io/userapi/users.json");
        const realData = await response.json();
        setMyData(realData);
       } catch(error){
        console.log(error);
       }     
    };

    useEffect(() => { getUserData() }, []);

    const showUserData = ({ item }) => {
        return (
          <View style={styles.cardContainer}>
            <Image style={styles.imgStyle} source={{uri: item.image}} />
            <View style={styles.infoContainer}>
              <View style={styles.bioDataContainer}>
                <Text style={styles.bioData}>Bio-Data</Text>
                <Text style={styles.idNumber}>
                  {item.id < 10 ? `#0${item.id}` : `#${item.id}`}
                </Text>
              </View>
              <Text style={styles.myName}>Name: {item.name}</Text>
              <Text style={styles.myName}>Email: {item.email}</Text>
              <Text style={styles.myName}>Mobile: {item.mobile}</Text>
            </View>
          </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>List of Students</Text>
            <FlatList
              data={myData}
              renderItem={showUserData}
              keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{ 
       flex: 1,
       paddingVertical: 20,
       backgroundColor:"#ebedee"
    },
    title: {
       fontSize: 20,
       textAlign: "center",
       marginBottom: 10,
    },
    cardContainer: {
      backgroundColor:"#fff",
      marginHorizontal:16,
      marginVertical:8,
      borderRadius:10,
      padding:16,
      elevation:2,
    },
    imgStyle: {
      width:100,
      height:100,
      borderRadius:50,
      alignSelf:"center",
      marginBottom:10
    },
    infoContainer: {
      paddingHorizontal:10
    },
    bioDataContainer: {
      flexDirection:"row",
      justifyContent:"space-between",
      marginBottom:8
    },
    bioData: {
      fontWeight:"bold"
    },
    idNumber: {
      fontWeight:"bold",
      color:"gray"
    },
    myName: {
      marginVertical:2
    }
})

export default UserData;
