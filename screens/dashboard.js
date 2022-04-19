import React, {  useState } from "react";
import { View,Text,TouchableOpacity,StyleSheet,TextInput,ScrollView,Alert} from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        height: 600
     },
     input: {
        margin: 15,
      borderColor: 'black',
      fontSize:20,
      padding:15,
        borderWidth: 3,
        color:"black",
       
     },
    
    orangebox: {
       
        backgroundColor: 'orange'
     },
     containers: {
        paddingTop: 23,
        justifyContent: 'center',
     textAlign: "center",
       
         fontSize:30,
         color:"black"
     },
     
   btn: {
     marginTop:20,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"flex-end",
    backgroundColor: "black",
    margin:15,
    padding: 8,
    textAlign: "center" ,
    borderRadius: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});



function Dashboard(){
    const showAlert = () =>{
        Alert.alert(
           'yor are suceessfully booked a car'
        )
     }
  
  
    return<>
 

<ScrollView>
<View style = {styles.orangebox}>

<View >
        
       <Text style = {styles.containers} >Booking And contact</Text>
      </View>
      <View>

    <TextInput
  style={styles.input}
               
              placeholder = " Enter Your Name :"
                placeholderTextColor = "black" ></TextInput>
                </View>
                <View>

    <TextInput
  style={styles.input}
               
              placeholder = " Enter Car Name :"
                placeholderTextColor = "black" ></TextInput>
                </View>
                <View>

    <TextInput
  style={styles.input}
               
              placeholder = " Enter Model :"
                placeholderTextColor = "black" ></TextInput>
                </View>
                <View>

    <TextInput
  style={styles.input}
               
              placeholder = " Enter Days :"
                placeholderTextColor = "black" ></TextInput>
                </View>
                <View>

    <TextInput
  style={styles.input}
               
              placeholder = " Enter Contact:"
                placeholderTextColor = "black" ></TextInput>
                </View>
                <View>

    <TextInput
  style={styles.input}
               
              placeholder = " Enter Address :"
                placeholderTextColor = "black" ></TextInput>
                </View>
                <View>

    <TextInput
  style={styles.input}
               
              placeholder = " Enter Car Color :"
                placeholderTextColor = "black" ></TextInput>
                </View>
                <View>

    <TextInput
  style={styles.input}
               
              placeholder = " Enter Email :"
                placeholderTextColor = "black" ></TextInput>
                </View>


                <TouchableOpacity  title="Show alert" onPress={showAlert} style={styles.btn}>
                    <Text style={{ color: "orange", fontSize: 25, textAlign: "center" }}>+</Text>
                 </TouchableOpacity>
         </View>
         </ScrollView>
       
     
      
         
       
     
        
       

     
      
    </>
}
export default Dashboard;