import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Favourite from '../../screens/Favourite';
import ItemDetailScreen from '../../screens/ItemDetailScreen';
import CartScreen from '../../screens/CartScreen';
import ShopNow from '../../screens/ShopNow';
import Splash from '../../screens/Splash';
import Splash2 from '../../screens/Splash/Splash2';
import BottomNavigation from '../Bottom/BottomNavigation';
import HomeTop from '../../components/HomeTop';
// import DrawerMenu from '../Drawer/DrawerNavigation';

const stack = createStackNavigator();
const AppNavigation = () => {
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName={Splash} >
            <stack.Screen name="Splash"
                    options={{
                        headerShown: false
                    }}
                    component={Splash} />
                <stack.Screen name="Splash2"
                    options={{
                        headerShown: false
                    }}
                    component={Splash2} />
                <stack.Screen name="Home"
                    options={{
                        headerShown: false
                    }}
                    component={BottomNavigation} />
                <stack.Screen name="ShopNow"
                    options={{
                        headerShown: false
                    }}
                    component={ShopNow} />
                <stack.Screen name="Fav"
                    options={{
                        headerShown: false
                    }}
                    component={Favourite} />
                <stack.Screen name="DetailScreen"
                    options={{
                        headerShown: false
                    }}
                    component={ItemDetailScreen} />
                <stack.Screen name="CartScreen"
                    options={{
                        headerShown: false
                    }}
                    component={CartScreen} />
                    <stack.Screen name="HomeTop"
                    options={{
                        headerShown: false
                    }}
                    component={HomeTop} />
                {/* <stack.Screen name="DrawerMenu" 
                component={DrawerMenu} />  */}

            </stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation