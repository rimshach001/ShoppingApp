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
        marginLeft: wp(20),
        color:Color.darkBlue,
        fontWeight:'bold'
    },
    renderContainer: {
        flexDirection: 'row',
        flex: 1,
        marginVertical: wp(1),
        height: wp(22),
        borderWidth:wp(0.5),
        borderColor:Color.darkBlue,
        borderRadius:wp(3)
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
    },
    titleItem: {
        paddingTop: wp(2),
    },
    titleTxt:{
        fontWeight:'bold'
    },
    priceItem: {
        marginTop:wp(1)
    },
    textPrice: {
        fontWeight: 'bold',
        color: 'darkblue'
    },
    totalpriceContainer: {
        margin: wp(3),
        alignItems: 'flex-end',
        backgroundColor: Color.darkBlue,
        flexDirection: 'row',
        borderRadius:wp(1)
    },
    priceContainerleft:{
        flex:0.5
    },
    totalpriceText: {
        fontSize: wp(6),
        color:Color.white,
        paddingLeft:wp(2),
        fontWeight:'bold',
    },
    pricecontainerright:{
        flex:0.6,
        alignItems:'flex-end',
        right:wp(2)
        
    },
    totalPrice:{
        fontSize:wp(6),
        color:Color.white,
        // marginLeft:wp(30),
        fontWeight:'bold',
    }

})
export default styles