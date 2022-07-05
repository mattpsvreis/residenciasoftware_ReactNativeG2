import React from 'react'
import AxiosInstance from '../../api/AxiosInstance'
import { AutenticacaoContext } from '../../context/AutenticacaoContext'

import { ActivityIndicator, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler'

import Text from '../../components/Text'

import ProdutoCard from '../../components/ProdutoCard'
import ProdutoType from '../../models/ProdutoType'

import styles from './styles'

export default function Categoria({ route, navigation }: any) {

    const { categoria } = route.params;
    const { usuario } = React.useContext(AutenticacaoContext);

    const [produtos, setProdutos] = React.useState<ProdutoType[]>([]);
    const [produtosIsLoading, setProdutosIsLoading] = React.useState(true);

    const getDadosProdutos = async () => {
        AxiosInstance
            .get('/produto', { headers: { "Authorization": `Bearer ${usuario.token}` } })
            .then(result => {
                setProdutos(result.data.filter((prod: any) => prod.idCategoria == categoria.idCategoria));
                setProdutosIsLoading(false);
            })
            .catch((error) => {
                console.log('Erro ao carregar a lista de produtos: ' + JSON.stringify(error))
            });
    }

    const handleReturn = () => {
        navigation.goBack()
    }

    React.useEffect(() => {
        getDadosProdutos();
    }, [])

    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <TouchableHighlight onPressIn={handleReturn}>
                    <Icon
                        name='arrow-left'
                        color="#dc1e3e"
                        type='material-community'
                        size={36}
                        tvParallaxProperties={undefined}
                    />
                </TouchableHighlight>
                <Text style={styles.title}>{categoria.nomeCategoria}</Text>
            </View>
            {produtosIsLoading ?
                <ActivityIndicator size='large' color='#fff' />
                :
                <FlatList
                    data={produtos}
                    horizontal={false}
                    contentContainerStyle={styles.produtosContainer}
                    renderItem={response => <ProdutoCard produto={response.item} navigation={navigation} styles={styles} />}
                    ItemSeparatorComponent={
                        () => <View style={{ width: 10 }} />
                    }
                />
            }
        </View>
    )
}
