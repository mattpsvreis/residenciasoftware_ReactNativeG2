import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body: {
        alignItems: 'stretch',
        justifyContent: 'space-between',
        paddingVertical: 16,
        backgroundColor: '#fff',
        height: '100%',
    },
    title: {
        textAlign: 'center',
        fontSize: 32,
        letterSpacing: 0.5,
        fontWeight: 'bold',
    },
    produtosContainer: {
        padding: 0,
        paddingBottom: 16,
        marginTop: 10,
        marginHorizontal: 10,
    },
    produtoContainer: {
        flexDirection: 'row',
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: '#aaa',
        borderWidth: 1,
        padding: 16,
        marginHorizontal: 4,
    },
    produtoImage: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    produtoContainerRight: {
        marginLeft: 12,
        justifyContent: 'space-between',
    },
    produtoContainerTop: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    produtoNome: {
        width: 200,
        fontWeight: 'bold',
        fontSize: 18,
    },
    produtoContainerBottom: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    valorProduto: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#dc1e3e',
    },
    buttonsAddRemoveContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#1113',
        borderRadius: 5,
    },
    buttonReduce: {
        width: 32,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    buttonReduceText: {
        width: 32,
        height: 24,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#111b',
    },
    qtdProduto: {
        width: 40,
        height: 24,
        backgroundColor: '#ebf0ff',
        textAlign: 'center',
        fontSize: 16,
        color: '#1119',
    },
    buttonAdd: {
        width: 32,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    buttonAddText: {
        width: 32,
        height: 24,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#111b',
    },
    finalContainer: {
        borderRadius: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#1114',
        marginHorizontal: 16,
        padding: 16,
        marginBottom: 8,
        marginTop: 16,
    },
    finalContainerSeparator: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    finalContainerEnd: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    finalContainerText: {
        fontSize: 16,
        color: '#111a',
    },
    finalContainerValue: {
        fontSize: 16,
    },
    totalText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    totalValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#dc1e3e',
    },
    cleanButton: {
        padding: 0,
        margin: 0,
        backgroundColor: '#fff',
        marginBottom: 8,
    },
    cleanButtonText: {
        color: '#DC1E3E',
        fontSize: 16,
        letterSpacing: 0.5,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    finishButton: {
        marginHorizontal: 16,
        height: 57,
        borderRadius: 5,
        backgroundColor: '#dc1e3e',
    },
    finishButtonText: {
        fontSize: 20,
        letterSpacing: 0.5,
        fontWeight: '600',
    },
})

export default styles;