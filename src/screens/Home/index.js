import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, FlatList, SafeAreaView, Image, StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Dispatch, useDispatch, useSelector } from 'react-redux'
import { addToCart, itemName } from '../../ReduxToolkit/ReduxToolkit';

const Home = () => {
    const [allProducts, setAllProducts] = useState([]);
    const navigation = useNavigation()
    const cart = useSelector(state => state.data)
    // console.log(cart, "---data of cart----")
    const dispatch = useDispatch();
    const productDetail = (product) => {
        dispatch(addToCart());
        // dispatch(itemName(product))
        // console.log("after dispatch")
    }
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        try {
            fetch('https://fakestoreapi.com/products')
                .then((res) => res.json())
                .then((json) => {
                    setAllProducts(json);
                })
                .catch((error) => {
                    console.log("Error:", error);
                });
        } catch (error) {
            console.log("Error:", error);
        }
    };
    const ShowDetail = ((item) => {
        navigation.navigate("DetailScreen", { item: item })
    })
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Shop Now</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("CartDetails_ReduxToolkit")}
                    style={{ height: 30, alignItems: 'right' }} >
                    <Text style={{ textAlign: 'right', fontSize: 25, borderColor: 'black', marginLeft: 300, borderRadius: 15, backgroundColor: 'grey', color: 'white', textAlign: 'center' }}> {cart.Cart} </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={allProducts}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <View style={styles.itempart}>
                        <TouchableOpacity onPress={() => ShowDetail(item)}>
                            <View style={styles.imageItem}>
                                <Image source={{ uri: item.image }} style={styles.image} />
                            </View>
                            <Text style={styles.title}>{item.title}</Text>
                        </TouchableOpacity>
                        <Text style={styles.price}>Price: ${item.price}</Text>
                        <Text style={styles.rating}>Rating: {item.rating.rate}</Text>
                        </View>
                        <View style={styles.cartpart}>
                        <TouchableOpacity onPress={() => productDetail(item)}
                            style={styles.cart} >
                            <Text > Add to Cart</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F0',
        paddingTop: wp(4)
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: wp(9),
    },
    itemContainer: {
        flex: 1,
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        // borderLeftColor:'black',
        // borderLeftWidth:0.5,
        padding: wp(3),
    },
    cartpart:{
        flex:0.25,
        // backgroundColor:'blue'
    },
    itempart:{
        flex:0.75,
        // backgroundColor:'red'
    },
    imageItem: {
        alignItems: 'center'
    },
    image: {
        width: wp(30),
        height: wp(30),
    },
    title: {
        fontWeight: 'bold',
        marginTop: wp(2),
    },
    price: {
        marginTop: wp(0.5),
    },
    rating: {
        marginTop: wp(0.5),
    },
    cart: {
        backgroundColor: 'lightgrey',
        width: 150,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        bottom:wp(0)
    }
});

export default Home;
