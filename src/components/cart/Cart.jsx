import { StyleSheet, Text, View, SafeAreaView, ScrollView, Modal } from 'react-native'
import React from 'react'
import CloseCartButton from './CloseCartButton'


const Cart = ({total, modalCart, SetModalCart})=>{
 return(
    <>
    <Modal
     animationType='slide'
     visible={modalCart}
     transparent={true}
    >
      <View style={styles.containerModalcart}>
        <CloseCartButton SetModalCart={SetModalCart}/>
          <Text>Secado Cabello Corto</Text>
      </View>

    </Modal>
  
  </>
 )
}

const styles = StyleSheet.create({
    containerModalcart:{
        marginTop: 50,
        backgroundColor: "white",
            width: '100%',
            height: '95%',
            borderRadius:20,
            shadowOpacity: 0.3, 
            shadowRadius: 4, 
            shadowOffset: { height: 1, width: 0 },
        },
})

export default Cart