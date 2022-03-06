import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Services from '../screens/Services';
import ServiceDetails from '../screens/ServiceDetails';


const Navigation = () => {

    const Stack = createStackNavigator();
    const screenOption = {
        headerShow: false,
    }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Services" component={Services}/>
          <Stack.Screen name="Services Details" component={ServiceDetails}/>
         
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})