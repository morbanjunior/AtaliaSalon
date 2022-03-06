import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

const BackBottom = () => {

    const navigation = useNavigation(); 

  return (
    <TouchableOpacity 
    style={styles.backBottomContainer}
    onPress={() => navigation.goBack()}
    
    >
      <Icon style={styles.bottom} name="arrow-back-circle-sharp" size={40}/>
    </TouchableOpacity>
  )
}

export default BackBottom

const styles = StyleSheet.create({
    backBottomContainer:{
        backgroundColor: 'white',
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
      bottom:{
        marginLeft: 25,
        borderRadius:50,
      }
})