import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Card } from 'react-native-elements';

export default function ProdutoCard(props: any) {

    const image = `${props.produto.imagemProduto}`;

    const handlePress = () => {
        props.navigation.navigate({name: 'Produto', params: {
            produto: props.produto,
        }});
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <Card containerStyle={props.styles.produtoContainer}>
                <Card.Image
                    source={{ uri: image }}
                    style={props.styles.produtoContainerImage}
                    width={undefined}
                    height={undefined}
                />
                <Card.Title style={props.styles.textCardTitle}>{props.produto.nomeProduto}</Card.Title>
                <Text style={props.styles.textCardValue}>R$ {parseFloat(props.produto.precoProduto).toFixed(2).replace('.',',')}</Text>
            </Card>
        </TouchableOpacity>
    )
}