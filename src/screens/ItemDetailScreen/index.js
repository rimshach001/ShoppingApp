import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import styles from './styles';
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

export default ItemDetailScreen