import React from 'react'

import { ActivityIndicator, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import Text from '../../components/Text'

import FavoritoCard from '../../components/FavoritoCard'

import styles from './styles'

export default function Favoritos() {

  const produtos:any = [];

  const [produtosIsLoading, setProdutosIsLoading] = React.useState(false);

  return (
    <View style={styles.body}>
      <Text style={styles.title}>Favoritos</Text>
      {produtosIsLoading ?
        <ActivityIndicator size='large' color='#fff' />
        :
        <FlatList
          data={produtos}
          horizontal={false}
          contentContainerStyle={styles.produtosContainer}
          renderItem={response => <FavoritoCard produto={response.item} styles={styles} />}
          ItemSeparatorComponent={
            () => <View style={{ width: 10 }} />
          }
        />
      }
    </View>
  )
}