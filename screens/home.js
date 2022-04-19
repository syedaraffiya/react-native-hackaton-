import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';

export default function Home({navigation}) {
  
      return (
   <>
     <Image source = {{uri:'https://www.ecorentacar.com/blog/wp-content/uploads/2019/09/Car-Image.jpg'}}
   style = {{ width: 400, height: 400 }}
   />
          
         <View style = {styles.container}>
        
            <Text style={styles.containers}>("RENT- A -CAR")</Text>
            
            <Text style={styles.containers}>(Online Booking of rent a  Cars)</Text>
            
            <View>
            <TouchableOpacity  title="submit"
        onPress={() => navigation.navigate('signup')}  
   style={styles.submitButton}
   >
  
    <Text style={styles.submitButtonText}>Sign Up</Text>

  </TouchableOpacity>

            <TouchableOpacity  title="submit"
        onPress={() => navigation.navigate('Login')}  
   style={styles.submitButton}
   >
  
    <Text style={styles.submitButtonText}>LOG IN</Text>

  </TouchableOpacity>
</View>

           
         </View>
      
    </>
        
      );
   }


const styles = StyleSheet.create({
    containers: {
        paddingTop: 23,
        justifyContent: 'center',
     textAlign: "center",
     
         fontSize:20,
         color:"black"
     },
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      color:"black",
      backgroundColor:"orange",
      padding: 5,
      margin: 15,
      
   },
   submitButton: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius:50,
    borderColor:"black",
    padding: 5,
    margin: 15,
    backgroundColor:"black",
    
 },
 submitButtonText:{
    color: 'orange',
    fontSize:15,
    textAlign: "center",

    margin: 10,
 },
});