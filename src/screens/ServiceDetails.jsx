import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import BackBottom from '../components/service/BackBottom';
import HomeAds from '../components/home/HomeAds'
import ServiceDetailsItem from '../components/service/ServiceDetailsItem'
import CartM from '../components/modal/cartM';

const ServiceDetails = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'white'}}>
    <View>
     <BackBottom/>
     <ServiceDetailsItem/>
     <CartM />
    </View>
    </SafeAreaView>
  )
}

export default ServiceDetails

const styles = StyleSheet.create({})