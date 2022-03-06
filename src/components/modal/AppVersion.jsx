import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppVersion = () => {
  return (
    <View style={styles.appVersion}>
      <Text>v1.0.0</Text>
    </View>
  )
}

export default AppVersion

const styles = StyleSheet.create({
    appVersion:{
        margin:20,
    }
})