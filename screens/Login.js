import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground} from "react-native";
// import styling from '../styling'
import auth from '@react-native-firebase/auth';


const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
        justifyContent: 'center',
     textAlign: "center",
         margin: 20,
         fontSize:60,
         color:"white"
     },
     input: {
        margin: 15,
      borderColor: 'white',
      fontSize:20,
      padding:15,
        borderWidth: 3,
        color:"white",
       
     },
     submitButton: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius:20,
        borderColor:"black",
        padding: 5,
        margin: 25,
        
     },
     submitButtonText:{
        color: 'black',
        fontSize:25,
        textAlign: "center",
      
        margin: 15,
     },
    screen:{
     
       height:800,
       width:340,
       margin:10,
      
       
      
     }
     
   })


function Login({ navigation }) {
    const [LoginObj, setLoginObj] = useState({})

    const Login = () => {
        console.log(LoginObj)
        auth()
            .signInWithEmailAndPassword(LoginObj.email, LoginObj.password)
            .then((user) => {
                console.log('User account signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }
    return <>
     <ImageBackground
      
      source={{
        uri:
          "https://wallpaperset.com/w/full/9/3/3/336115.jpg",
      }}>
        
        <View  style={styles.screen}>

       
            <View>
            <Text style={styles.container}>Login</Text>
            </View>
            
            <View >
                <TextInput onChangeText={(e) => setLoginObj({ ...LoginObj, email: e })} placeholder="email" placeholderTextColor = "white" style={styles.input} />
            </View>
            <View >
                <TextInput onChangeText={(e) => setLoginObj({ ...LoginObj, password: e })} placeholder="password" placeholderTextColor = "white"  style={styles.input} />
            </View>
           

            <View>
  <TouchableOpacity style={styles.submitButton}
  onPressIn={Login}
   title="submit"
   onPress={() => navigation.navigate('product')} >

    <Text style={styles.submitButtonText} >LogIn</Text>

  </TouchableOpacity>

  </View>
  </View>

        </ImageBackground>
      
    </>
}

export default Login;