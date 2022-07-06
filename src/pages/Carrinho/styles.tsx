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
        paddingBottom: 30,
        marginTop: 10,
        marginHorizontal: 10,
    },
    produtoContainer: {
        width: 165,
        height: 245,
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
        textAlign: 'center',
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