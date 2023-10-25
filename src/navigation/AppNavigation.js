import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home';
import Favourite from '../screens/Favourite';
import ItemDetailScreen from '../screens/ItemDetailScreen';

const stack = createStackNavigator();
const AppNavigation = () => {
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName={Home} >
                <stack.Screen name="Home"
                    options={{
                        headerShown: false
                    }}
                    component={Home} />
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
                    
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation