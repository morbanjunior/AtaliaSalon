import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';


const ServicesAround = () => {

  const navigation = useNavigation(); 
  return (
    
      <TouchableOpacity style={styles.servicesContainer}
      onPress={() => navigation.navigate('Services')}
      >
      <Text style={styles.servicesText}>Services Around you</Text>
      <Icon style={styles.aroundIcon} name="arrow-forward-circle" size={30}/>
      </TouchableOpacity>
    
  )
}

export default ServicesAround

const styles = StyleSheet.create({
  servicesContainer:{
    backgroundColor: '#FFFFFF',
    marginTop:10,
    marginBottom:10,
    height:50,
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  aroundIcon:{
    marginLeft:20,
  },
  servicesText:{
    fontSize:18,
    fontWeight: "500"
  }

})