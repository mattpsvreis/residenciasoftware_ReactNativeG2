import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body: {
        alignItems: 'stretch',
        padding: 16,
        backgroundColor: '#fff',
        minHeight: '100%',
    },
    mainContainer: {
        alignItems: 'stretch',
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#1114',
        borderStyle: 'solid',
        borderRadius: 5,
        paddingHorizontal: 16,
        marginHorizontal: -10,
        marginBottom: 10,
    },
    searchInputText: {
        marginLeft: 8,
        textDecorationLine: 'none',
        paddingBottom: 8,
    },
    searchIcon: {

    },
    searchResults: {
        backgroundColor: '#fff',
        width: 379,
        position: 'absolute',
        zIndex: 999,
        top: 63,
        right: 16,
        borderStyle: 'solid',
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: "#1114",
        paddingVertical: 6,
        paddingHorizontal: 10,
    },
    searchResult: {
        fontSize: 16,
        letterSpacing: 0.5,
        borderTopColor: '#1118',
        borderTopWidth: 1,
        borderStyle: 'solid',
        paddingVertical: 6,
    },
    offer: {
        marginTop: 16,
    },
    offerImage: {
        height: 200,
        backgroundColor: '#1119',
        padding: 24,
        paddingRight: 50,
        borderRadius: 5,
    },
    offerText: {
        color: 'aliceblue',
        fontSize: 36,
        fontWeight: '700',
        letterSpacing: 0.5,
        textShadowColor: '#151515',
        textShadowRadius: 10,
    },
    titleCategorias: {
        fontWeight: '700',
        fontSize: 22,
        letterSpacing: 0.5,
        marginTop: 16,
        marginBottom: 12,
    },
    categoriasContainer: {
        paddingBottom: 10,
        marginBottom: 50,
    },
    categoriaContainer: {
        alignItems: 'center',
    },
    categoriaButton: {
        width: 70,
        height: 70,
        borderColor: '#999a',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 66,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',

    },
    categoriaIcon: {
        width: 24,
        height: 24,
    },
    nomeCategoria: {
        fontWeight: '400',
        fontSize: 14,
        letterSpacing: 0.5,
        textAlign: 'center',
        color: '#151515cc',
    },
    titleProdutos: {
        fontWeight: '700',
        fontSize: 22,
        letterSpacing: 0.5,
        marginTop: 16,
    },
    produtosContainer1: {
        padding: 0,
        paddingBottom: 10,
        marginLeft: -13,
        height: 260,
    },
    produtosContainer2: {
        padding: 0,
        marginHorizontal: -13,
        marginBottom: 130,
    },
    produtoContainer: {
        width: 165,
        height: 229,
        alignItems: 'center',
        justifyContent: 'center',
    },
    produtoContainerImage: {
        width: 133,
        height: 133,
        borderRadius: 5,
        marginBottom: 10
    },
    textCardTitle: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 14,
        letterSpacing: 0.5,
    },
    textCardValue: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 14,
        letterSpacing: 0.5,
        color: '#dc1e3e',
    },
});

export default styles;