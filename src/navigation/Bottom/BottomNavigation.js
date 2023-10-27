import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import image from '../../Theme/Image';
import { View, Image, Text } from 'react-native';
import styles from './styles';
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    if (route.name === 'Homee') {
                        icon = image.Home;
                        iconName = 'Home';
                    }
                    else if (route.name === 'Fav') {
                        icon = image.Fav;
                        iconName = 'Fav';
                    } else if (route.name === 'Cart') {
                        icon = image.Cart;
                        iconName = 'Cart';
                    }
                    return (
                        <View style={styles.bottomNavContainer}>
                            <View>
                                <Image style={styles.Icon} source={icon} />
                            </View>
                            <View>
                                <Text style={styles.IconTxt}>{iconName}</Text>
                                {focused ?
                                    <View style={styles.IconTxtLine}></View>
                                    : null}
                            </View>
                        </View>
                    );
                },
                headerShown: false,
                tabBarLabel: '',
                tabBarStyle: styles.tabBar
            })}
        >
            <Tab.Screen name="Homee" component={Home} />
            <Tab.Screen name="Fav" component={Home} />
            <Tab.Screen name="Cart" component={Home} />

        </Tab.Navigator>
    );
}
export default BottomNavigation