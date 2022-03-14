import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'


const CloseCartButton = ({SetModalCart}) => {

  return (
    <TouchableOpacity 
    style={styles.backBottomContainer}
    onPress={() => SetModalCart(false)}
    
    >
      <Icon style={styles.bottom} name="md-close-circle" size={40}/>
    </TouchableOpacity>
  )
}

export default CloseCartButton

const styles = StyleSheet.create({

    backBottomContainer:{
        backgroundColor: 'white',
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop:10,
      },
      bottom:{
        marginLeft: 20,
        borderRadius:50,
      }
})