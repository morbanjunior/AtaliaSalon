import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import Profile from '../components/home/Profile'
import HomeAds from '../components/home/HomeAds';
import Categories from '../components/home/Categories';
import Search from '../components/home/Search';
import LocationsHistories from '../components/home/LocationsHistories';
import ServicesAround from '../components/home/ServicesAround';
import { Divider } from 'react-native-elements/dist/divider/Divider';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'white'}}>
    <View style={styles.container}>
        <Profile/>
        <ScrollView showsVerticalScrollIndicator={false}>
        <HomeAds/>
        <Categories/>
        <Search/>
        <LocationsHistories/>
        </ScrollView>
        <Divider />
        <ServicesAround/>
       
    <StatusBar style="auto" />
  </View>
  </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        
      },
})