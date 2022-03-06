import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeAds = () => {
  return (
    <View style={styles.containerAd}>
        <TouchableOpacity>
        <View style={styles.adInformation}>
        <Image 
      style={styles.imageAd}
      source={{
         uri: 'https://www.adweek.com/wp-content/uploads/2018/04/cvs-unretouched-PAGE-2018.jpg',
      }}/>
        </View>
        </TouchableOpacity>
      
    </View>
  )
}

export default HomeAds

const styles = StyleSheet.create({
    containerAd:{
        backgroundColor: '#FFFFFF',
        height:120, 
        justifyContent: 'center',
        alignItems: 'center'

    },
    adInformation:{
        width:350,
        height:100,
       
    },
    imageAd:{
        width:350,
        height:100,
        borderRadius:15,
    }

})