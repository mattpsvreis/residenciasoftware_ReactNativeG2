import React from 'react';
import { TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Text, Card, Icon } from 'react-native-elements';
import { FavoritosContext } from '../context/FavoritosContext';

export default function FavoritoCard(props: any) {

    const image = `${props.produto.imagemProduto}`;

    const { removeFavorito } = React.useContext(FavoritosContext);

    const handlePress = () => {
        props.navigation.navigate({
            name: 'Produto', params: {
                produto: props.produto,
            }
        });
    }

    const handleRemove = () => {
        removeFavorito(props.produto.sku);
    }

    return (
        <Card containerStyle={props.styles.produtoContainer}>
            <TouchableOpacity onPress={handlePress}>
                <Card.Image
                    source={{ uri: image }}
                    style={props.styles.produtoContainerImage}
                    width={undefined}
                    height={undefined}
                />
            </TouchableOpacity>
            <Card.Title style={props.styles.textCardTitle}>{props.produto.nomeProduto}</Card.Title>
            <View style={props.styles.bottomBox}>
                <Text style={props.styles.textCardValue}>R$ {parseFloat(props.produto.precoProduto).toFixed(2).replace('.', ',')}</Text>
                <TouchableHighlight onPress={handleRemove} underlayColor='#dc1e3e' style={{ borderRadius: 150 }}>
                    <Icon
                        name='trash-can-outline'
                        color="#aaa"
                        type='material-community'
                        size={22}
                        tvParallaxProperties={undefined}
                    />
                </TouchableHighlight>
            </View>
        </Card>
    )
}