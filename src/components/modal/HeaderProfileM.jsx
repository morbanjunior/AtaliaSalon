import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const HeaderProfileM = () => {
  return (
    <View style={styles.headerContainer}>
        <View style={styles.subheaderContainer}>
            <View><Text style={styles.headerText}>Ramon Morban</Text></View>
            <View style={styles.subheaderReview}>
              <Icon style={styles.bottom} name="star" size={15}/>
                <Text>4.50</Text>
            </View>
        </View>
      <View>
      <TouchableOpacity
          
        >
        <Image 
      style={styles.userLogo}
      source={{
         uri: 'https://lh3.googleusercontent.com/a-/AOh14Gjd8of9tP-ABUKov7YCivEXf1derEcIfOoypLXJ9w=s96-c-rg-br100',
      }}/>
      </TouchableOpacity>
      </View>
      
     
    </View>
  )
}

export default HeaderProfileM

const styles = StyleSheet.create({
    headerContainer:{
        margin: 20,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    subheaderContainer:{
        
    },
    headerText:{
        fontSize: 35,
        fontWeight: '600',
    }
    ,
    userLogo:{
        marginRight: 10,
        width: 55,
        height: 55,
        borderRadius:50,
        marginTop:-25,
      },
      subheaderReview:{
          flexDirection: 'row',
          padding: 5,
          backgroundColor:'#e8e8e8',
          width: 70,
          borderRadius:50, 
          justifyContent: 'space-between',
          alignItems: 'center',
      }
})