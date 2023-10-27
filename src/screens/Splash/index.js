import { Image, SafeAreaView} from 'react-native'
import React,{useEffect} from 'react'
import image from '../../Theme/Image';
import styles from './styles';
const Splash=  ({navigation}) => {
    useEffect(()=>{
        const timer = setTimeout(() => {
            navigation.navigate('Splash2'); 
          }, 2000);
      
          return () => clearTimeout(timer);
    })
  return (
    <SafeAreaView style={styles.splashContainer}>
     <Image source={image.logo} style={styles.logo1}/>
    </SafeAreaView>
  )
}

export default Splash