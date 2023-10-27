import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Color from '../../Theme/Color';
const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        backgroundColor: Color.purple,
        width: wp(100),
        paddingTop: wp(8)
    },
    top: {
        flex: 0.15,
        flexDirection: 'row'
    },
    search: {
        flex: 0.85,
        borderRadius: wp(3),
        alignItems:'center',
        justifyContent:'center'
    },
    searchBar:{
        borderRadius:wp(2),
        width: wp(66),
        height:wp(7),
        backgroundColor: Color.bgclr,
    },
    cart: {
        flex: 0.15,
        // backgroundColor:'red',
        alignItems:'flex-start',
        justifyContent:'center'
    },
    cartIcon:{
        width:wp(7),
        height:wp(7)
    },
    center:{
        flex:0.6,
        flexDirection:'row',
        // backgroundColor:'pink'
    },
    centerleft:{
        flex:0.6,
        alignItems:'center',
        paddingTop:wp(2)
    },
    title:{
        fontSize:wp(7),
        color:Color.bgclr,
        fontWeight:'bold',
        marginTop:wp(5)
    },
    tagline1:{
        fontSize:wp(5),
        color:Color.bgclr,
        fontStyle:'italic'
        // fontWeight:'bold'
    },
    tagline2:{
        fontSize:wp(5),
        color:Color.bgclr,
        left:wp(10),
        fontStyle:'italic'
        // fontWeight:'bold'
    },
    centerright:{
        flex:0.4,
        alignItems:'flex-start',
        justifyContent:'flex-start',
    },
    shoppingImg:{
        flex:1,
        height:wp(40),
        width:wp(40),
        resizeMode:'contain', 
        marginTop:wp(10),
        marginLeft:wp(3)
    },
    bottom:{
        flex:0.25,
        alignItems:'center',
    },
    shopbtn:{
        marginRight:wp(30),
        backgroundColor:Color.bgclr,
        height:wp(10),
        width:wp(30),
        alignItems:'center',
        justifyContent:'center',
        borderRadius:wp(5),
    },
    shopNowText:{
        fontWeight:'bold',
        color:Color.purple
    }


})
export default styles