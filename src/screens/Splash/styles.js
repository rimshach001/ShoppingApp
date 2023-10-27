import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Color from '../../Theme/Color';
const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        backgroundColor: Color.bgclr,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo1: {
        height: wp(40),
        width: wp(40)
    },
    logo2: {
        height: wp(60),
        width: wp(60),
        resizeMode:'contain'
    },
    btn: {
        color: Color.white,
        fontSize: wp(4),
        paddingHorizontal: wp(13),
        paddingVertical: wp(2.5),
        borderRadius: wp(5),
        marginTop: hp(2.5),
        backgroundColor: Color.darkBlue
    }

})
export default styles