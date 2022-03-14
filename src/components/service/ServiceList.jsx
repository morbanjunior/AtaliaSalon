import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ServicesItem from './ServicesItem'

const ServiceList = () => {
  return (
    <View style={{marginBottom:130}}>
      <ServicesItem />
      <ServicesItem />
      <ServicesItem />
      <ServicesItem />
      <ServicesItem />
      <ServicesItem />
      <ServicesItem />
      <ServicesItem />
    </View>
  )
}

export default ServiceList

const styles = StyleSheet.create({})