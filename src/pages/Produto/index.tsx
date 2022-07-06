import React from "react";
import { CarrinhoContext } from "../../context/CarrinhoContext";

import { View, TouchableHighlight, ActivityIndicator, ScrollView } from 'react-native';
import { Button, Text, Image, Icon } from "react-native-elements";

import styles from "./styles";
import { FavoritosContext } from "../../context/FavoritosContext";

const Produto = ({ route, navigation }: any) => {
    const { produto } = route.params;
    const { addProduto, listProdutos, addQuantity } = React.useContext(CarrinhoContext);

    const { listFavoritos, addFavorito, removeFavorito } = React.useContext(FavoritosContext);

    const [isFavorito, setIsFavorito] = React.useState(false);
    const [isCarrinho, setIsCarrinho] = React.useState(false);

    const [loadingAddToCart, setLoadingAddToCart] = React.useState(false);

    const handleAddToCart = async () => {
        setLoadingAddToCart(true)
        if (isCarrinho == true) {
            await addQuantity(produto.sku);
        } else {
            await addProduto(
                produto.sku,
                produto.nomeProduto,
                produto.descricaoProduto,
                produto.precoProduto,
                produto.imagemProduto
            )
        }
        setLoadingAddToCart(false)
        navigation.navigate('CarrinhoTabScreen')
    }

    const handleReturn = () => {
        navigation.goBack()
    }

    const handleFavorite = async () => {
        if (isFavorito == true) {
            await removeFavorito(produto.sku);
            setIsFavorito(false);
        } else {
            await addFavorito(
                produto.sku,
                produto.nomeProduto,
                produto.descricaoProduto,
                produto.precoProduto,
                produto.imagemProduto
            )
            setIsFavorito(true);
        }
    }

    React.useEffect(() => {
        listFavoritos().forEach((fav: any) =>
            fav.sku === produto.sku ? setIsFavorito(true) : null,
        );

        listProdutos().forEach((fav: any) =>
            fav.sku === produto.sku ? setIsCarrinho(true) : null,
        );
    }, [])

    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <TouchableHighlight onPress={handleReturn} underlayColor='#dc1e3e' style={{ borderRadius: 150 }}>
                    <Icon
                        name='arrow-left'
                        color="#dc1e3e"
                        type='material-community'
                        size={36}
                        tvParallaxProperties={undefined}
                    />
                </TouchableHighlight>
                <Text style={styles.title}>{produto.nomeProduto}</Text>
            </View>
            <ScrollView contentContainerStyle={styles.mainContainer}>
                <View style={styles.boxImagem}>
                    <Image
                        source={{ uri: produto.imagemProduto }}
                        style={styles.imagemProduto}
                        width={undefined}
                        height={undefined}
                    />
                </View>
                <View style={styles.boxNomeProduto}>
                    <Text style={styles.nomeProduto}>{produto.nomeProduto}</Text>
                    <TouchableHighlight onPress={handleFavorite} underlayColor='#dc1e3e' style={{ borderRadius: 150 }}>
                        {isFavorito ?
                            <Icon
                                name='heart'
                                color="#dc1e3e"
                                type='material-community'
                                size={28}
                                tvParallaxProperties={undefined}
                            />
                            :
                            <Icon
                                name='heart-outline'
                                color="#aaa"
                                type='material-community'
                                size={28}
                                tvParallaxProperties={undefined}
                            />
                        }
                    </TouchableHighlight>
                </View>
                <Text style={styles.valorProduto}>R$ {parseFloat(produto.precoProduto).toFixed(2).replace('.', ',')}</Text>
                <Text style={styles.detalhesProduto}>Especificações</Text>
                <View style={styles.boxDescricaoProduto}>
                    <Text style={styles.titleDescricaoProduto}>Descrição do Produto:</Text>
                    <Text style={styles.skuProduto}>{produto.sku}</Text>
                </View>
                <Text style={styles.descricaoProduto}>{produto.descricaoProduto}</Text>
            </ScrollView>
            {loadingAddToCart ?
                <ActivityIndicator size='large' color='#DC1E3E' />
                :
                <Button onPress={handleAddToCart} buttonStyle={styles.buttonAddToCart} titleStyle={styles.buttonAddToCartText} title='ADICIONAR AO CARRINHO' />
            }
        </View>
    )
}

export default Produto;