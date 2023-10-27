import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Color from '../../Theme/Color'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.bgclr,
        paddingTop: wp(4)
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    headerText: {
        fontSize: wp(9),
        marginLeft: wp(25),
        color: Color.purple,
        fontWeight: 'bold'
    },
    cartImg:{
        height:wp(7),
        width:wp(7),
        marginLeft: wp(15),
        marginTop: wp(1.5)
    },
    cartItems: {
        marginLeft: wp(15),
        textAlign: 'right',
        fontSize: 20,
        borderColor: 'black',
        borderRadius: 15,
        backgroundColor: Color.purple,
        color: 'white',
        textAlign: 'center',
        marginTop: wp(1)
    },
    itemContainer: {
        flex: 1,
        alignItems: 'center',
        borderBottomColor: 'black',
        // borderBottomWidth: 0.5,
        // borderLeftColor:'black',
        // borderLeftWidth:0.5,
        padding: wp(3),
        // backgroundColor:'red',
        borderWidth: wp(0.5),
        margin: wp(2),
        borderRadius: wp(3),
        borderColor: Color.purple

    },
    cartpart: {
        flex: 0.25,
        // backgroundColor:'blue'
    },
    itempart: {
        flex: 0.75,
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
        backgroundColor: Color.purple,
        width: wp(40),
        height: wp(8),
        alignItems: 'center',
        justifyContent: 'center',
        bottom: wp(0),
        borderRadius: wp(4)
    },
    cartTxt: {
        color: Color.white
    }


})
export default styles