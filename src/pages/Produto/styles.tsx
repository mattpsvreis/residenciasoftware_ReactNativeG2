import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
        alignItems: 'center',
    },
    title: {
        marginLeft: 10,
        marginTop: 2,
        marginRight: 50,
        textAlign: 'left',
        fontSize: 24,
        letterSpacing: 0.5,
    },
    mainContainer: {
        padding: 16,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    boxImagem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagemProduto: {
        alignSelf: 'center',
        width: 230,
        height: 230,
    },
    boxNomeProduto: {
        marginTop: 18,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    nomeProduto: {
        fontSize: 32,
        fontWeight: 'bold',
        letterSpacing: 0.5,
        width: '80%',
    },
    valorProduto: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 18,
        marginBottom: 20,
        color: '#dc1e3e',
        letterSpacing: 0.5,
    },
    detalhesProduto: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        letterSpacing: 0.5,
    },
    boxDescricaoProduto: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    titleDescricaoProduto: {
        fontSize: 16,
        letterSpacing: 0.5,
    },
    skuProduto: {
        fontSize: 16,
        color: '#777',
        letterSpacing: 0.5,
    },
    descricaoProduto: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        color: '#777',
        letterSpacing: 0.5,
    },
    buttonAddToCart: {
        backgroundColor: '#dc1e3e',
        marginHorizontal: 16,
        height: 57,
        borderRadius: 5,
    },
    buttonAddToCartText: {
        fontSize: 18,
        letterSpacing: 0.5,
    },
});

export default styles;