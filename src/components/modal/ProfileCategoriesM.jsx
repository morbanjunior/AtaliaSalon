import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const ProfileCategoriesM = () => {
  return (
    <View style={styles.categoriaPrfileM}>
      <TouchableOpacity>
        <View style={styles.containerBottom}>
        <Icon style={styles.bottom} name="md-help-circle" size={30}/>
          <Text style={styles.containerText}>Help </Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.containerBottom}>
        <Icon style={styles.bottom} name="card" size={30}/>
          <Text style={styles.containerText}>Payment</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.containerBottom}>
        <Icon style={styles.bottom} name="calendar" size={30}/>
          <Text style={styles.containerText}>Services</Text>
        </View>
        </TouchableOpacity>
    </View>
  )
}

export default ProfileCategoriesM

const styles = StyleSheet.create({
    categoriaPrfileM:{
        margin:20, 
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerBottom:{
        backgroundColor: '#e8e8e8',
        height:100,
        width:100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius:10,
    },
    containerText:{
      fontWeight:"600",
     
    }
})