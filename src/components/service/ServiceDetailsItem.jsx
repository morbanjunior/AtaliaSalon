import { StyleSheet, Text, View, Image, TouchableOpacity,  } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ServiceDetailsItem = () => {
  const navigation = useNavigation(); 

  return (
    <>
    <View style={styles.DetailsContainer}>
      <Image 
      style={styles.imageAd}
      source={{
         uri: 'https://www.adweek.com/wp-content/uploads/2018/04/cvs-unretouched-PAGE-2018.jpg',
      }}/>
    </View>
    <View style={styles.SubDetailsContainer}>
    <Text style={styles.headerText}>Secado Cabello Corto al hombro</Text>
      <Text style={styles.textPrice}>DOP 500.00</Text>
      <Text style={styles.textDetails}>El cliente espera con su pelo lavado.</Text>
    </View>
    <View style={styles.bottomScheduleContainer}>
      <TouchableOpacity 
      style={styles.bottomSchedule}
      onPress={() => navigation.goBack()}
      >
        <Text style={styles.bottomScheduleText}>Add to my Services</Text>
      </TouchableOpacity>
    </View>
    </>
  )
}

export default ServiceDetailsItem

const styles = StyleSheet.create({

DetailsContainer:{
  justifyContent: 'center',
  alignItems: 'center',
},
SubDetailsContainer:{
  justifyContent: 'center',
  alignItems: 'flex-start',
  margin:20,
},
  imageAd:{
      width:350,
      height:350,
      borderRadius:15,
  },
  headerText:{
    flexDirection: 'row',
    fontSize:20,
    fontWeight: '700',
    paddingBottom:10,
},
textPrice: {
  paddingBottom:10,
  fontSize:16,
},
textDetails:{
  fontSize:14,
},
bottomScheduleContainer:{
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 170,
},
bottomSchedule:{
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black',
  width:350,
  height:60,
  borderRadius: 10,

},
bottomScheduleText:{
  color: 'white',
  fontSize: 20,
  fontWeight: 'bold',
}
})