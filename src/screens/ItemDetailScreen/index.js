import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const ItemDetailScreen = ({ route }) => {
    const { item } = route.params
    console.log(item);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{item.title}</Text>
            </View>
            <View style={styles.itemContainer}>
                <View style={styles.imageView}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                </View>
                <Text style={styles.boldText}>Price: <Text style={styles.price}>${item.price}</Text></Text>
                <Text style={styles.boldText}>Description: <Text style={styles.desc}>{item.description}</Text></Text>
                <Text style={styles.boldText}>Category: <Text style={styles.price}>{item.category}</Text></Text>
                <Text style={styles.boldText}>Rating: <Text style={styles.rating}>{item.rating.rate}</Text></Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F0',
        paddingTop: wp(8),
        //   alignItems:'center',
        paddingHorizontal: wp(3)
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: wp(8),
    },
    itemContainer: {
        flex: 1,
        //   alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        // borderLeftColor:'black',
        // borderLeftWidth:0.5,
        padding: wp(2),
    },
    imageView: {
        alignItems: 'center',
    },
    image: {
        width: wp(70),
        height: wp(70),
    },
    desc: {
        //   fontWeight: 'bold',
        marginTop: 10,
        fontWeight: 'normal'
    },
    category: {
        fontWeight: 'bold',
        marginTop: 10,
        fontWeight: 'normal'
    },
    price: {
        // fontSize:wp(5),
        marginTop: 5,
        fontWeight: 'normal'
    },
    rating: {
        marginTop: 5,
        fontWeight: 'normal'
    },
    boldText: {
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: wp(4)
    },
});

export default ItemDetailScreen