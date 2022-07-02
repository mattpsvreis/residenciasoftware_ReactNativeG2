import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Login from '../pages/Login'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const StackNavigation = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator screenOptions={{
        headerShown:false}}>
        <StackNavigation.Screen
        name='Login'
        component={Login}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  )
}
