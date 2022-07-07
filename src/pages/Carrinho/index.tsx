import React from 'react'
import { CarrinhoContext } from '../../context/CarrinhoContext';

import { ActivityIndicator, FlatList, RefreshControl, View } from 'react-native';
import { Button } from 'react-native-elements';

import CarrinhoCard from '../../components/CarrinhoCard';

import Text from '../../components/Text';

import styles from './styles';

export default function Carrinho({ navigation }: any) {

  const { listProdutos, countProdutos, resetCarrinho } = React.useContext(CarrinhoContext);

  const [carrinho, setCarrinho] = React.useState([]);
  const [valorTotal, setValorTotal] = React.useState(0.0);
  const [taxa, setTaxa] = React.useState(0.0);
  const [frete, setFrete] = React.useState(0.0);

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
    let value = 0;
    carrinho.forEach((prod: any) => {
      value += prod.preco_produto * prod.quantidade;
    })
    setValorTotal(value);
    setTaxa(value / 100 * 12);
    setFrete(value / 100 * 7);
  }, [carrinho])

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
      <View style={styles.finalContainer}>
        <View style={styles.finalContainerSeparator}>
          <Text style={styles.finalContainerText}>Itens ( {countProdutos()} )</Text>
          <Text style={styles.finalContainerValue}>R$ {(valorTotal).toFixed(2).replace('.',',')}</Text>
        </View>
        <View style={styles.finalContainerSeparator}>
          <Text style={styles.finalContainerText}>Frete</Text>
          <Text style={styles.finalContainerValue}>R$ {(frete).toFixed(2).replace('.',',')}</Text>
        </View>
        <View style={styles.finalContainerSeparator}>
          <Text style={styles.finalContainerText}>Taxas</Text>
          <Text style={styles.finalContainerValue}>R$ {(taxa).toFixed(2).replace('.',',')}</Text>
        </View>
        <View style={styles.finalContainerEnd}>
          <Text style={styles.totalText}>Valor Total</Text>
          <Text style={styles.totalValue}>R$ {(valorTotal + taxa + frete).toFixed(2).replace('.',',')}</Text>
        </View>
      </View>
      <Button
        buttonStyle={styles.cleanButton}
        titleStyle={styles.cleanButtonText}
        onPress={handleClean}
        title='Limpar carrinho'
      />
      <Button
        buttonStyle={styles.finishButton}
        titleStyle={styles.finishButtonText}
        title='FINALIZAR PEDIDO'
        onPress={handlePedido}
      />
    </View>
  )
}
