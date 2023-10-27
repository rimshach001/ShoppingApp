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
import Spinner from 'react-native-loading-spinner-overlay';
import styles from './styles';
import image from '../../Theme/Image'
// GraceGalleria
// Where Elegance Meets Shopping

const ShopNow = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigation = useNavigation()
    const cart = useSelector(state => state.data)
    // console.log(cart, "---data of cart----")
    const dispatch = useDispatch();
    const productDetail = (product) => {
        dispatch(addToCart());
        console.log("after adding");
        dispatch(itemName(product))
        console.log("after dispatch")
    }
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            await fetch('https://fakestoreapi.com/products')
                .then((res) => res.json())
                .then((json) => {
                    setAllProducts(json);
                    setIsLoading(false);
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
    const moveTocart = (() => {
        navigation.navigate("CartScreen")
    })
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.headerText}>Shop Now</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => moveTocart()}
                        style={{ height: 30, alignItems: 'right' }} >
                            <Image source={image.Cart} style={styles.cartImg}/>
                        {/* <Text style={styles.cartItems}> {cart.Cart} </Text> */}
                    </TouchableOpacity>
                </View>
            </View>
                {(isLoading==true)?

                    (<Spinner
                    visible={isLoading} // Set this to true to show the spinner or false to hide it
                    textContent={'Loading...'} // Optional text content to display
                    textStyle={{ color: '#FFF' }} // Optional styles for the text
                    />)
                    :
                    (
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
                                    {/* <Text style={styles.rating}>Rating: {item.rating.rate}</Text> */}
                                </View>
                                <View style={styles.cartpart}>
                                    <TouchableOpacity onPress={() => productDetail(item)}
                                        style={styles.cart} >
                                        <Text style={styles.cartTxt}> Add to Cart</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    />
                    )
                }

              
           
        </View>
    );
};


export default ShopNow;



