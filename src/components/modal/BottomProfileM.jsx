import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconS from 'react-native-vector-icons/Ionicons'
import Icon5 from 'react-native-vector-icons/FontAwesome5'

const BottomProfileM = () => {
  return (
    <View style={styles.containerBottom}>
         <TouchableOpacity>
            <View style={styles.containerButton}>
                <Icon name="email" size={25}/>
                <Text style={styles.containerText}>Messages </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.containerButton}>
                <IconS name="settings" size={25}/>
                <Text style={styles.containerText}>Settings </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.containerButton}>
                <Icon5 name="users" size={25}/>
                <Text style={styles.containerText}>Work with Atalia </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.containerButton}>
                <Icon5 name="exclamation-circle" size={25}/>
                <Text style={styles.containerText}>Legal</Text>
            </View>
        </TouchableOpacity>
     
    </View>
  )
}

export default BottomProfileM

const styles = StyleSheet.create({
    containerBottom:{
        margin: 20,
        marginTop: 50,
    },
    containerButton:{
        flexDirection: 'row',
        alignItems: 'center',
        width:150,
        marginBottom:20,

    },
    containerText:{
        fontSize:16,
        marginLeft: 20,
        
    }

})