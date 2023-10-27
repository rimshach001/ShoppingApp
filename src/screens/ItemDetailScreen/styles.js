import { StyleSheet } from 'react-native';
import Color from '../../Theme/Color'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Color.bgclr,
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
})
export default styles