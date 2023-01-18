
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../app/screens/LoginScreen'
import SplashScreen from '../app/screens/SplashScreen'
import { colors } from '../app/styles'
import { View } from 'react-native'


export default function Appnavigator() {
    const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={SplashScreen} options={
                {
                    header: () => null
                }
            }></Stack.Screen>
            <Stack.Screen name='Login' component={LoginScreen} options={
                {
                    headerTransparent: true
                }
            }></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}