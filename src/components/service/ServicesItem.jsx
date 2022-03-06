import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ServicesItem = () => {

    const navigation = useNavigation(); 

  return (
    <TouchableOpacity style={styles.containerItem}
      onPress={() => navigation.navigate('Services Details')}
    >
         <View>
         <Image 
            style={styles.imageItem}
            source={{
            uri: 'https://www.adweek.com/wp-content/uploads/2018/04/cvs-unretouched-PAGE-2018.jpg',
      }}/>
        </View>
        <View style={styles.containerHeader}>
            <Text style={styles.headerText} numberOfLines={1}>Secado Cabello Corto al hombro</Text >
            <Text>DOP 500.00</Text>
            <Text>El cliente espera con su pelo lavado.</Text>
        </View>
      
    </TouchableOpacity>
  )
}

export default ServicesItem

const styles = StyleSheet.create({
    containerItem:{
    
        flexDirection: 'row',
        marginLeft:20,
        marginRight:120,
        marginBottom:10,
      

    },
    imageItem:{
        width:80,
        height:80,
        borderRadius:15,
        marginRight:10,
    },
    containerHeader:{
        justifyContent: 'center'
    },
    headerText:{
        flexDirection: 'row',
        fontSize:17,
        fontWeight: '700',
    }

})