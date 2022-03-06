import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoriesServices = () => {
  return (
      <ScrollView showsHorizontalScrollIndicator={false}  horizontal={true}>
    <View style={styles.containerCategories}>
        <TouchableOpacity style={styles.containerBottom}>
        <Text >Hair</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerBottom}>
        <Text>nail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerBottom}>
        <Text>make-up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerBottom}>
        <Text>massages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerBottom}>
        <Text>barbershop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerBottom}>
        <Text>facial</Text>
        </TouchableOpacity>
    
    </View>
    </ScrollView>
  )
}

export default CategoriesServices

const styles = StyleSheet.create({
    containerCategories:{
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        height:80, 
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:10,
        marginLeft:10,

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