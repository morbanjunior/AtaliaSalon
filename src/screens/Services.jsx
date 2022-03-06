import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import BackBottom from '../components/service/BackBottom';
import HomeAds from '../components/home/HomeAds'
import CategoriesServices from '../components/service/CategoriesServices';
import ServiceList from '../components/service/ServiceList';

const Services = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'white'}}>
    <View>
      <BackBottom/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <HomeAds/>
      <CategoriesServices />
      <ServiceList />
      </ScrollView>
    </View>
    </SafeAreaView>
  )
}

export default Services

const styles = StyleSheet.create({})