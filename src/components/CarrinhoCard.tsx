import React from 'react';
import { CarrinhoContext } from '../context/CarrinhoContext';

import { TouchableHighlight, View } from 'react-native';
import { Text, Icon, Image, Button } from 'react-native-elements';
import { FavoritosContext } from '../context/FavoritosContext';

export default function CarrinhoCard(props: any) {

    const { removeProduto, addQuantity, reduceQuantity } = React.useContext(CarrinhoContext);
    const { listFavoritos, removeFavorito, addFavorito } = React.useContext(FavoritosContext);

    const [isFavorito, setIsFavorito] = React.useState(false);

    const handlePress = () => {
        props.navigation.navigate({
            name: 'Produto', params: {
                produto: props.produto,
            }
        });
    }

    const handleRemove = () => {
        removeProduto(props.produto.id_produto);
    }

    const handleFavorite = async () => {
        if (isFavorito == true) {
            await removeFavorito(props.produto.sku);
            setIsFavorito(false);
        } else {
            await addFavorito(
                props.produto.sku,
                props.produto.nome_produto,
                props.produto.descricao_produto,
                props.produto.preco_produto,
                props.produto.imagem_produto
            )
            setIsFavorito(true);
        }
    }

    const handleReduce = () => {
        if (props.produto.quantidade > 1) {
            reduceQuantity(props.produto.sku);
        } else {
            removeProduto(props.produto.id_produto);
        }
    }

    const handleAdd = () => {
        addQuantity(props.produto.sku);
    }

    React.useEffect(() => {
        listFavoritos().forEach((fav: any) =>
            fav.sku === props.produto.sku ? setIsFavorito(true) : null,
        );
    }, [])

    return (
        <View style={props.styles.produtoContainer}>
            <TouchableHighlight onPress={handlePress} underlayColor='#dc1e3e' style={{ borderRadius: 150 }}>
                <Image
                    source={{ uri: props.produto.imagem_produto }}
                    style={props.styles.produtoImage}
                    width={undefined}
                    height={undefined}
                />
            </TouchableHighlight>
            <View style={props.styles.produtoContainerRight}>
                <View style={props.styles.produtoContainerTop}>
                    <Text style={props.styles.produtoNome}>{props.produto.nome_produto}</Text>
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
                    <TouchableHighlight onPress={handleRemove} underlayColor='#dc1e3e' style={{ borderRadius: 150 }}>
                        <Icon
                            name='trash-can-outline'
                            color="#aaa"
                            type='material-community'
                            size={28}
                            tvParallaxProperties={undefined}
                        />
                    </TouchableHighlight>
                </View>
                <View style={props.styles.produtoContainerBottom}>
                    <Text style={props.styles.valorProduto}>R$ {parseFloat(props.produto.preco_produto).toFixed(2).replace('.', ',')}</Text>
                    <View style={props.styles.buttonsAddRemoveContainer}>
                        <Button
                            buttonStyle={props.styles.buttonReduce}
                            titleStyle={props.styles.buttonReduceText}
                            title='-'
                            onPress={handleReduce}
                        />
                        <Text style={props.styles.qtdProduto}>{props.produto.quantidade}</Text>
                        <Button
                            buttonStyle={props.styles.buttonAdd}
                            titleStyle={props.styles.buttonAddText}
                            title='+'
                            onPress={handleAdd}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}