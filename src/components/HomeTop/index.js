import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import styles from './styles'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import image from '../../Theme/Image'
import { useNavigation } from '@react-navigation/native'
const HomeTop = () => {
    const navigation=useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.search}>
                    <TextInput style={styles.searchBar}
                    />
                </View>
                <View style={styles.cart}>
                    <TouchableOpacity>
                        <Image style={styles.cartIcon} source={image.Cart} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.center}>
                <View style={styles.centerleft}>
                    <Text style={styles.title}>GRACE GALLERIA</Text>
                    <Text style={styles.tagline1}>WHERE ELEGANCE</Text>
                    <Text style={styles.tagline2}>MEETS SHOPPING</Text>
                </View>
                <View style={styles.centerright}>
                    <Image source={image.Shop} style={styles.shoppingImg} />
                </View>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity onPress={()=>{navigation.navigate("ShopNow")}} style={styles.shopbtn}>
                    <Text style={styles.shopNowText}>Shop Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeTop
