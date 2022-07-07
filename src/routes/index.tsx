import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from 'react-native-elements';

import Login from '../pages/Login'
import Home from '../pages/Home'
import Favoritos from '../pages/Favoritos'
import Carrinho from '../pages/Carrinho'
import Perfil from '../pages/Perfil'
import Categoria from '../pages/Categoria';
import Produto from '../pages/Produto';
import ForgotPassword from '../pages/ForgotPassword';
import Cadastro from '../pages/Cadastro';
import { CarrinhoContext } from '../context/CarrinhoContext';

const StackNavigation = createNativeStackNavigator();
const TabNavigation = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { countProdutos } = React.useContext(CarrinhoContext);

  return (
    <TabNavigation.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarLabelStyle: { fontSize: 14, fontWeight: '600', letterSpacing: 0.5, },
        tabBarStyle: { backgroundColor: '#fff', borderTopWidth: 2, borderBottomWidth: 0, height: 55, },
        tabBarActiveTintColor: '#dc1e3e',
      }}
    >
      <TabNavigation.Screen
        name='HomeTabScreen'
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <Icon
              name='home'
              color={focused ? "#dc1e3e" : "#151515"}
              type='material-community'
              size={32}
              tvParallaxProperties={undefined}
            />
          ),
        }}
      />
      <TabNavigation.Screen
        name='FavoritosTabScreen'
        component={Favoritos}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ focused }) => (
            <Icon
              name='tag'
              color={focused ? "#dc1e3e" : "#151515"}
              type='material-community'
              size={28}
              tvParallaxProperties={undefined}
            />
          ),
        }}
      />
      {countProdutos() < 1 ?
        <TabNavigation.Screen
          name='CarrinhoTabScreen'
          component={Carrinho}
          options={{
            tabBarLabel: 'Carrinho',
            tabBarIcon: ({ focused }) => (
              <Icon
                name='cart'
                color={focused ? "#dc1e3e" : "#151515"}
                type='material-community'
                size={28}
                tvParallaxProperties={undefined}
              />
            ),
          }}
        />
        :
        <TabNavigation.Screen
          name='CarrinhoTabScreen'
          component={Carrinho}
          options={{
            tabBarLabel: 'Carrinho',
            tabBarBadge: countProdutos(),
            tabBarIcon: ({ focused }) => (
              <Icon
                name='cart'
                color={focused ? "#dc1e3e" : "#151515"}
                type='material-community'
                size={28}
                tvParallaxProperties={undefined}
              />
            ),
          }}
        />
      }
      <TabNavigation.Screen
        name='PerfilTabScreen'
        component={Perfil}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ focused }) => (
            <Icon
              name='account'
              color={focused ? "#dc1e3e" : "#151515"}
              type='material-community'
              size={28}
              tvParallaxProperties={undefined}
            />
          ),
        }}
      />
    </TabNavigation.Navigator>
  )
}

export default function Routes() {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator screenOptions={{
        headerShown: false
      }}>
        <StackNavigation.Screen
          name='Login'
          component={Login}
        />
        <StackNavigation.Screen
          name='Cadastro'
          component={Cadastro}
        />
        <StackNavigation.Screen
          name='ForgotPassword'
          component={ForgotPassword}
        />
        <StackNavigation.Screen
          name='Home'
          component={BottomTabNavigator}
        />
        <StackNavigation.Screen
          name='Categoria'
          component={Categoria}
        />
        <StackNavigation.Screen
          name='Produto'
          component={Produto}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  )
}