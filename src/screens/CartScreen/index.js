import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { Image } from 'react-native'
import styles from './styles'

const CartScreen = () => {
    const cart = useSelector(state => state.data)
    const renderItem = ({ item }) => {
        console.log("CEHCK ITEM", item.title);
        return (
            <View style={styles.renderContainer}>
                <View style={styles.imageItem}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                </View>
                <View style={styles.detailItem}>
                    <View style={styles.titleItem}>
                        <Text style={styles.titleTxt} >{item.title}</Text>
                    </View>
                    <View style={styles.priceItem}>
                        <Text style={styles.textPrice}>Rs.{item.price}</Text>
                    </View>
                </View>

            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Shopping Cart</Text>
            <FlatList
                data={cart.Item}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
            <View style={styles.totalpriceContainer}>
                <View style={styles.priceContainerleft}>
                    <Text style={styles.totalpriceText}>Total price</Text>
                </View>
                <View style={styles.pricecontainerright}>
                    <Text style={styles.totalPrice}>Rs {cart.TotalPrice}</Text>
                </View>
            </View>
        </View>
    )
}

export default CartScreen