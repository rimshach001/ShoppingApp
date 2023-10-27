import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Color from '../../Theme/Color';
const styles = StyleSheet.create({
    bottomNavContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width: wp(10),
        height: wp(5)
    },
    Icon: {
        height: wp(5),
        width: wp(5),
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    IconTxt: {
        color: Color.white,
        fontSize: wp(2.5)
    },
    IconTxtLine: {
        height: wp(0.5),
        backgroundColor: Color.white
    },
    tabBar:{
        borderColor:Color.bgclr,
        position:'absolute',
        bottom:wp(3),
        marginHorizontal:wp(4),                    
        // paddingVertical: 2,
        // justifyContent:'center',
        // zIndex:1,
        height: wp(13),
        backgroundColor:Color.purple,
        borderRadius:50,
        // display: data === true ? "none" : undefined
      }

})
export default styles
