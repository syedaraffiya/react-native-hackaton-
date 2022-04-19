import React,{ useState }  from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';


const reference = database().ref('/users/');



const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
        justifyContent: 'center',
     textAlign: "center",
         margin: 20,
         fontSize:60,
         color:"white",
        
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
        borderWidth: 1,
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

function SignUp({ navigation }) {
    const [signUpObj, setSignUpObj] = useState({})

    const signUp = () => {
        console.log(signUpObj)
        auth()
            .createUserWithEmailAndPassword(signUpObj.email, signUpObj.password)
            .then((user) => {
                console.log('User account created & signed in!');
                signUpObj.uid = user.user.uid
                reference.child(signUpObj.uid).set(signUpObj).then(() => {
                    console.log('Data Saved in Database Succesfully')
                })
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
        uri:"https://i2.wp.com/background4free.com/download/red_black_orange_1342939077.jpg?q=100"
}}>
        <View style={styles.screen}>
            <View >
            <Text style={styles.container}>Sign Up</Text>
            </View>
            <View style={[styles.py1, styles.px4]}>
                <TextInput onChangeText={(e) => setSignUpObj({ ...signUpObj, name: e })} placeholder="Name"  placeholderTextColor = "white" style={styles.input} />
            </View>
            <View style={[styles.py1, styles.px4]}>
                <TextInput onChangeText={(e) => setSignUpObj({ ...signUpObj, email: e })} placeholder="email" placeholderTextColor = "white" style={styles.input} />
            </View>
            <View style={[styles.py1, styles.px4]}>
                <TextInput onChangeText={(e) => setSignUpObj({ ...signUpObj, password: e })} placeholder="password" placeholderTextColor = "white" style={styles.input} />
            </View>
           
            <View>
  <TouchableOpacity  title="submit"onPressIn={signUp}
        onPress={() => navigation.navigate('Login')}  
   style={styles.submitButton}
   >
  
    <Text style={styles.submitButtonText}>Sign Up</Text>

  </TouchableOpacity>

  </View>
        </View>
        </ImageBackground>
    </>

// onPressIn={signUp}
}

export default SignUp;