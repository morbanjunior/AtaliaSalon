import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal } from 'react-native'
import React from 'react'

const ShowCart = ({total, SetModalCart, })=>{
 return(
    <>
    {
        total ? (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: "row",
                position: "absolute",
                bottom: 50,
                zIndex: 999,
                
            }}>
                <View style={{flexDirection: "row",
                    justifyContent: "center",
                    width: "100%",}}>
             <TouchableOpacity style={{
                 marginTop: 20,
                 backgroundColor: "black",
                 alignItems:  "center",
                 flexDirection: "row",
                 justifyContent: "flex-end",
                 padding: 15,
                 borderRadius: 30,
                 width:300, 
                 position: "relative",
                 
                 }}
                 onPress={()=>SetModalCart(true)}
                 
                 >
                 <Text style={{ 
                   color: 'white', 
                   fontSize: 20, 
                   marginRight: 30}}
                   >View Cart</Text>
                   <Text style={{ 
                   color: 'white', 
                   fontSize: 20,
                   marginLeft: 30,
                   }}>Total</Text>
              </TouchableOpacity>
              </View>
            </View>
        ) : (<></>)
    }
    
     
     </>
 )
}

const styles = StyleSheet.create({
    containerModalcart:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        position: "absolute",
        bottom: 50,
        zIndex: 999,
        },
        cartContainer:{
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
        }
})

export default ShowCart