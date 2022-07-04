import React from 'react'
import AxiosInstance from '../../api/AxiosInstance';

import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { Image, Text } from 'react-native-elements';

import CategoriaType from '../../models/CategoriaType';
import ProdutoType from '../../models/ProdutoType';

import CategoriaButton from '../../components/CategoriaButton';
import ProdutoCard from '../../components/ProdutoCard';

import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';

const Home = ({ navigation }: any) => {

  const { usuario } = React.useContext(AutenticacaoContext);

  const [categorias, setCategorias] = React.useState<CategoriaType[]>([]);
  const [produtos, setProdutos] = React.useState<ProdutoType[]>([]);

  const [categoriasIsLoading, setCategoriasIsLoading] = React.useState(true);
  const [produtosIsLoading, setProdutosIsLoading] = React.useState(true);

  const getDadosCategorias = async () => {
    AxiosInstance
      .get('/categoria', { headers: { "Authorization": `Bearer ${usuario.token}` } })
      .then(result => {
        setCategorias(result.data);
        setCategoriasIsLoading(false);
      })
      .catch((error) => {
        console.log('Erro ao carregar a lista de categorias: ' + JSON.stringify(error))
      });
  }

  const getDadosProdutos = async () => {
    AxiosInstance
      .get('/produto', { headers: { "Authorization": `Bearer ${usuario.token}` } })
      .then(result => {
        setProdutos(result.data);
        setProdutosIsLoading(false);
      })
      .catch((error) => {
        console.log('Erro ao carregar a lista de produtos: ' + JSON.stringify(error))
      });
  }

  const handleOfferPress = () => {
    return null; //TODO
  }

  React.useEffect(() => {
    getDadosCategorias();
    getDadosProdutos();
  }, []);

  return (
    <View style={styles.body}>
      <View style={styles.searchbar}>

      </View>
      <View style={styles.offer}>
        <TouchableOpacity onPress={handleOfferPress}>
          <Image
            source={require('../../assets/offerImage.png')}
            style={styles.offerImage}
            width={undefined}
            height={undefined}
          >
            <Text style={styles.offerText}>Oferta Imperdível 50% Off</Text>
          </Image>
        </TouchableOpacity>
      </View>
      <Text style={styles.titleCategorias}>Categorias</Text>
      {categoriasIsLoading ?
        <ActivityIndicator size='large' color='#DC1E3E' />
        :
        <FlatList
          horizontal={true}
          style={styles.categoriasContainer}
          data={categorias}
          keyExtractor={(k, i) => i.toString()}
          renderItem={response => <CategoriaButton categoria={response.item} navigation={navigation} styles={styles} />}
        />
      }
      <Text style={styles.titleProdutos}>Produtos</Text>
      {produtosIsLoading ?
        <ActivityIndicator size='large' color='#DC1E3E' />
        :
        <FlatList
          horizontal={false}
          numColumns={2}
          style={styles.produtosContainer}
          data={produtos}
          keyExtractor={(k, i) => i.toString()}
          renderItem={response => <ProdutoCard produto={response.item} navigation={navigation} styles={styles} />}
        />
      }
    </View>
  )
}

export default Home;