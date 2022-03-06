import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Categories = () => {
  return (
    <View style={styles.containerCategories}> 
       <TouchableOpacity>
        <View style={styles.containerBottom}>
          <Text style={styles.containerText}>Delivery </Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.containerBottom}>
          <Text style={styles.containerText}>Establishment</Text>
        </View>
        </TouchableOpacity>
      
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({

    containerCategories:{
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        height:80, 
        justifyContent: 'center',
        alignItems: 'center'

    },

    containerBottom:{
        backgroundColor: '#e8e8e8',
        height:50,
        width:120,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius:10,
    },
    containerText:{
      fontWeight:"600",
     
    }
})