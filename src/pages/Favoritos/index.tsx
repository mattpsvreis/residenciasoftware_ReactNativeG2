import React from 'react'

import { FavoritosContext } from '../../context/FavoritosContext'

import { ActivityIndicator, RefreshControl, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import Text from '../../components/Text'

import FavoritoCard from '../../components/FavoritoCard'

import styles from './styles'
import { Button } from 'react-native-elements'

export default function Favoritos({ navigation }: any) {

  const [favoritos, setFavoritos] = React.useState([]);

  const { listFavoritos, resetFavoritos } = React.useContext(FavoritosContext);
 
  const [produtosIsLoading, setProdutosIsLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const getDadosFavoritos = () => {
    setFavoritos(listFavoritos());
  }

  const handleClean = async () => {
    await resetFavoritos()
    setFavoritos(listFavoritos());
  }

  React.useEffect(() => {
    getDadosFavoritos()
  }, [])

  return (
    <View style={styles.body}>
      <Text style={styles.title}>Favoritos</Text>
      {produtosIsLoading ?
        <ActivityIndicator size='large' color='#dc1e3e' />
        :
        <FlatList
          data={favoritos}
          horizontal={false}
          numColumns={2}
          contentContainerStyle={styles.produtosContainer}
          renderItem={response => <FavoritoCard produto={response.item} navigation={navigation} styles={styles} />}
          ItemSeparatorComponent={
            () => <View style={{ width: 10 }} />
          }
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={getDadosFavoritos} />
          }
        />
      }
      <Button
        buttonStyle={styles.cleanButton}
        titleStyle={styles.cleanButtonText}
        title='LIMPAR FAVORITOS'
        onPress={handleClean}
      />
    </View>
  )
}