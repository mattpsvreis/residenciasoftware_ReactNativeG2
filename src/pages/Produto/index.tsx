import React from "react";

import { View, StyleSheet, TouchableOpacity, TouchableHighlight, ActivityIndicator } from 'react-native';
import { Button, Text, Image, Icon } from "react-native-elements";
import { CarrinhoContext } from "../../context/CarrinhoContext";

const Produto = ({ route, navigation }: any) => {
    const { produto } = route.params;
    const { addProduto } = React.useContext(CarrinhoContext);

    const [loadingAddToCart, setLoadingAddToCart] = React.useState(false);

    const handleAddToCart = async () => {
        setLoadingAddToCart(true)
        await addProduto(
            produto.sku,
            produto.nomeProduto,
            produto.descricaoProduto,
            produto.precoProduto,
            produto.imagemProduto
        )
        setLoadingAddToCart(false)
        navigation.navigate('CarrinhoTabScreen')
    }

    const handleReturn = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <TouchableHighlight onPress={handleReturn} underlayColor='#dc1e3e' style={{borderRadius: 150}}>
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
            {loadingAddToCart ?
                <ActivityIndicator size='large' color='#DC1E3E' />
                :
                <Button onPress={handleAddToCart} buttonStyle={styles.buttonAddToCart} titleStyle={styles.buttonAddToCartText} title='ADICIONAR AO CARRINHO' />
            }
        </View>
    )
}

export const styles = StyleSheet.create({
    body: {
        alignItems: 'stretch',
        justifyContent: 'space-between',
        paddingVertical: 16,
        backgroundColor: '#fff',
        height: '100%',
    },
    header: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#1119',
        borderStyle: 'solid',
        paddingBottom: 9,
        paddingLeft: 10,
        width: '100%',
        marginTop: -8,
    },
    title: {
        marginLeft: 10,
        marginTop: 2,
        textAlign: 'center',
        fontSize: 24,
    },
    buttonAddToCart: {
        backgroundColor: '#dc1e3e',
        marginHorizontal: 16,
        height: 57,
        borderRadius: 5,
    },
    buttonAddToCartText: {
        fontSize: 18,
    },
});

export default Produto;