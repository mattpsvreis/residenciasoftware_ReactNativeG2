import React from 'react'
import { CarrinhoContext } from '../../context/CarrinhoContext';

import { ActivityIndicator, FlatList, RefreshControl, View } from 'react-native';
import { Button } from 'react-native-elements';

import CarrinhoCard from '../../components/CarrinhoCard';

import Text from '../../components/Text';

import styles from './styles';

export default function Carrinho({ navigation }: any) {

  const { listProdutos, resetCarrinho } = React.useContext(CarrinhoContext);

  const [carrinho, setCarrinho] = React.useState([]);

  const [carrinhoIsLoading, setCarrinhoIsLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const getDadosCarrinho = async () => {
    setCarrinhoIsLoading(true)
    setCarrinho(await listProdutos());
    setCarrinhoIsLoading(false)
  }

  const handleClean = async () => {
    await resetCarrinho()
    await getDadosCarrinho();
  }

  const handlePedido = () => {
    return null; //TODO
  }

  React.useEffect(() => {
    getDadosCarrinho()
  }, [])

  return (
    <View style={styles.body}>
      <Text style={styles.title}>Carrinho</Text>
      {carrinhoIsLoading ?
        <ActivityIndicator size='large' color='#dc1e3e' />
        :
        <FlatList
          data={carrinho}
          horizontal={false}
          numColumns={1}
          contentContainerStyle={styles.produtosContainer}
          renderItem={response => <CarrinhoCard produto={response.item} navigation={navigation} styles={styles} />}
          ItemSeparatorComponent={
            () => <View style={{ height: 10 }} />
          }
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={getDadosCarrinho} />
          }
        />
      }
      <Button
        buttonStyle={styles.finishButton}
        titleStyle={styles.finishButtonText}
        title='FINALIZAR PEDIDO'
        onPress={handlePedido}
      />
    </View>
  )
}
