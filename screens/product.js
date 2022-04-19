import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView,Image,TouchableOpacity } from 'react-native';


function Data ({navigation}) {
  const [data, setdata] = useState([
  
     
         {'name': 'Toyota carolla', 'id': 1,"perdayrent":"Rs:2000","color":"white","Model":"2022"},
         {'name': ' Civic', 'id': 2,"perdayrent":"Rs:2000","color":"gray","Model":"2021"},
         {'name': ' Honda', 'id': 3,"perdayrent":"Rs:2000","color":"black","Model":"2020"},
         {'name': 'Suzuki Alto', 'id': 4,"perdayrent":"Rs:1500","color":"red","Model":"2014"},
         {'name': 'Suzuki cultus', 'id': 5,"perdayrent":"Rs:1500","color":"black","Model":"2015"},
         {'name': 'Suzuki swift', 'id': 6,"perdayrent":"Rs:1500","color":"blue","Model":"2019"},
         {'name': 'Sonata', 'id': 7, "perdayrent":"Rs:3000","color":"black","Model":"2021"},
         {'name': 'Honda City', 'id': 8,"perdayrent":"Rs:2500","color":"white","Model":"2017"},
         {'name': 'Toyota yaris', 'id': 9,"perdayrent":"Rs:3000","color":"gray","Model":"2021"},
         {'name': ' Hyundai	', 'id': 10,"perdayrent":"Rs:3000","color":"white","Model":"2020"},
         {'name': 'Kia', 'id': 11,"perdayrent":"Rs:4000","color":"black","Model":"2021"},
         {'name': ' Jeep', 'id': 12,"perdayrent":"Rs:4000","color":"gray","Model":"2019"}
      ]
  )
  
      return (
         <View>
            <ScrollView>
             
               {
                  data.map((e, i) => (
                     <View key = {i} style = {styles.item}>
                       <Image source = {{uri:'https://avatars.mds.yandex.net/get-altay/1779701/2a0000016de269ec95d87afa7c8acd7b6839/XXL'}}
   style = {{ width: 150, height: 200 }}
   />
   <View>
                        <Text style={styles.color}>Name: " {e.name} ."</Text>
                        <Text style={styles.color}>Per Day Rent: {e.perdayrent}.</Text>
                        <Text style={styles.color}>Color: {e.color}.</Text>
                        <Text style={styles.color}>Model: {e.Model}.</Text>
                       
                        <View style = {styles.container}>
         <TouchableOpacity   title="submit"
   onPress={() => navigation.navigate('dashboard')}>
            <Text style = {styles.text}>
               Booking
            </Text>
         </TouchableOpacity>
      </View>
                        </View>
           
                     </View>
                  ))
               }
               
            </ScrollView>
         </View>
      )
   }

export default Data;

const styles = StyleSheet.create ({
   item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 25,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#708090',
      
   },
   color:{
     color:'white',
     padding: 15,
     fontSize:16,

   },
   container: {
    alignItems: 'center',
 },
 text: {
   borderRadius:20,
    borderWidth: 1,
    padding: 15,
    borderColor: 'white',
    backgroundColor: 'black',
    color:"white"
 }
})