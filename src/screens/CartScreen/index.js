import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
                        <Text >{item.title}</Text>
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
            <Text style={styles.headerText}>Shopping cart</Text>
            <FlatList
                data={cart.Item}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
            <View style={styles.totalpriceContainer}>
                <Text style={styles.totalpriceText}>Total price</Text>
                <View>
                    <Text style={styles.totalPrice}>{cart.TotalPrice}</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F0',
        paddingTop: wp(10),
        paddingHorizontal: wp(2)
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    headerText: {
        fontSize: wp(9),
        marginLeft: wp(20)
    },
    renderContainer: {
        flexDirection: 'row',
        flex: 1,
        marginVertical: wp(2),
        height: wp(20)
    },
    imageItem: {
        alignItems: 'center',
        flex: 0.3
    },
    image: {
        width: wp(20),
        height: wp(20),
    },
    detailItem: {
        alignItems: 'flex-start',
        flex: 0.7,
        // marginLeft: wp(1),
    },
    titleItem: {
        flex: 0.7,
        paddingTop: wp(2)
    },
    priceItem: {
        flex: 0.3
    },
    textPrice: {
        fontWeight: 'bold',
        color: 'darkblue'
    },
    totalpriceContainer: {
        margin: 20,
        alignItems: 'flex-end',
        // backgroundColor: 'blue',
        flexDirection: 'row',
        // flex:1
    },
    totalpriceText: {
        fontSize: wp(6),
        color:'darkblue',
        // flex:0.7
    },
    totalPrice:{
        fontSize:wp(5),
        color:'darkblue',
        marginLeft:wp(35)
        // flex:0.3
    }
});

export default CartScreen