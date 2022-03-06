import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'

const Search = () => {
  return (
    <View style={styles.container}>
      
      <TextInput style={styles.textInput}
      placeholder="Where are you?"
      placeholderTextColor="black"
      />
      <TouchableOpacity >
          <View style={styles.inputBottom}>
          <Icon style={styles.searchIcon} name="ios-location" size={20}/>
              <Text>My Location</Text> 
         </View>
      </TouchableOpacity>
      
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: 'center',
        
       
    },
    textInput:{
        borderRadius: 5,
        height: 60,
        width: 350,
        backgroundColor: '#e8e8e8',
        paddingLeft:10,
        marginBottom:10,
        marginTop:10,
        fontWeight:'400',
        fontSize:18,
        position: 'relative',
        
    },
    searchIcon:{
        color: 'black',
        
    },
    inputBottom:{
        backgroundColor: 'white',
        position: 'absolute',
        marginTop: 20,
        width: 120,
        height:40,
        right: 10,
        borderRadius:30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row'
       
    }

})