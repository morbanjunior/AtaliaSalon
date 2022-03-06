import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View>
      <View style={styles.profileContainer}>
        <TouchableOpacity>
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

export default Profile

const styles = StyleSheet.create({
  profileContainer:{
    backgroundColor: 'white',
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  userLogo:{
    marginRight: 25,
    width: 35,
    height: 35,
    borderRadius:50,
  }
 

})