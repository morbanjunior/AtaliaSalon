import { StyleSheet, Text, View, Modal } from 'react-native'
import React from 'react'
import CloseModalBottom from './CloseModalBottom'
import HeaderProfileM from './HeaderProfileM'
import ProfileCategoriesM from './ProfileCategoriesM'
import HomeAds from '../home/HomeAds'
import BottomProfileM from './BottomProfileM'
import AppVersion from './AppVersion'

const ProfileM = ({modelVisibleProfile, SeTmodelVisibleProfile}) => {
  return (
      <>
      <Modal
       animationType='slide'
       visible={modelVisibleProfile}
       transparent={true}
      >
        <View style={styles.containerModalProfile}>
            <CloseModalBottom SeTmodelVisibleProfile={SeTmodelVisibleProfile}/>
            <HeaderProfileM/>
            <ProfileCategoriesM/>
            <HomeAds/>
            <BottomProfileM/>
            <AppVersion/>
        </View>

      </Modal>
    
    </>
  )
}

export default ProfileM

const styles = StyleSheet.create({
    containerModalProfile:{
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