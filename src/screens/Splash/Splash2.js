import { View, Text, Image, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import image from '../../Theme/Image';
import styles from './styles';
const Splash2= ({ navigation }) => {
    return (
        <SafeAreaView style={styles.splashContainer}>
                <Image source={image.logoTag} style={styles.logo2}/>
                    <TouchableOpacity onPress={() => {navigation.navigate("Home")}}>
                        <Text style={styles.btn}>Let's go</Text>
                    </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Splash2