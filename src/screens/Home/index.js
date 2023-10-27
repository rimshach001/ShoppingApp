import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native'
import Color from '../../Theme/Color'
import HomeTop from '../../components/HomeTop'
import HomeCenter from '../../components/HomeCenter'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeTop/>
      <HomeCenter/>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Color.bgclr,
        alignItems:'center',
        justifyContent:'center'

    }
})
export default Home