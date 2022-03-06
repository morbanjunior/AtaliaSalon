import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

const LocationsHistoriesItem = () => {
    const navigation = useNavigation(); 
  return (
    <TouchableOpacity style={styles.lHcontainer}
    onPress={() => navigation.navigate('Services Details')}>
        <View style={styles.hLInformation}>
        <Icon style={styles.historyIcon} name="time" size={20}/>
         <View style={styles.historyDetails} >
         <Text style={styles.headerText} >Lavado de cabeza</Text>
          <Text>Ave. Independencia, calle proyecto #6, 
              sector El portal, apart. 203, Distrino Nacional,
               Republica Dominicana</Text>
         </View>
        </View> 
    </TouchableOpacity>
  )
}

export default LocationsHistoriesItem

const styles = StyleSheet.create({
    lHcontainer:{
        flexDirection: 'row',
        backgroundColor:"white",
        height:100,
        justifyContent: 'center',
        
    },
    hLInformation:{
        margin:10,
    },
    historyDetails:{
        marginLeft:35, 
        position: 'relative'
    },
    historyIcon:{
        position:'absolute',
        fontSize: 25,

    },
    headerText:{
        fontSize:20,
        fontWeight: '700',
    }
})