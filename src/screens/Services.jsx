import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import BackBottom from '../components/service/BackBottom';
import HomeAds from '../components/home/HomeAds'
import CategoriesServices from '../components/service/CategoriesServices';
import ServiceList from '../components/service/ServiceList';
import Cart from '../components/cart/Cart';
import ShowCart from '../components/modal/ShowCart';


const Services = () => {
  const [total, SetTotal] = useState(1);
  const [modalCart, SetModalCart] = useState(false);

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
    <ShowCart total={total} SetModalCart={SetModalCart}/>
    <Cart total={total} SetModalCart={SetModalCart} modalCart={modalCart}/>
    </SafeAreaView>
  )
}

export default Services

const styles = StyleSheet.create({})