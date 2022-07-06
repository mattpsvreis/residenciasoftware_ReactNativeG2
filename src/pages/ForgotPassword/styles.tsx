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
    },
    title: {
        marginLeft: 10,
        marginTop: 2,
        textAlign: 'center',
        fontSize: 24,
    },
    boxTitulo: {
        flexDirection: 'row',
        width: '100%',

        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 70,
        marginHorizontal: 66,
    },
    touchableContainer: {
        width: 25,
        height: 25,
    },
    botaoVoltar: {
        position: 'absolute',
    },
    titulo: {
        color: '#000',
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        width: '90%',
    },
    inputBox: {
        flex: 1,
        justifyContent: 'space-between',
    },
    logoDV_container: {
        alignItems: 'center',
    },
    logoDV: {
        width: 150,
        height: 150,
    },
    inputContainer: {
        paddingVertical: 2,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#cfcfcf',
        borderRadius: 10,
        margin: -8,
        marginHorizontal: 10,
    },
    containerButtons: {
        alignItems: 'center',
    },
    button: {
        marginTop: 15,
        width: 300,
        backgroundColor: '#dc1e3e',
        borderRadius: 10,
        padding: 10,
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: '#dc1e3e',
    },
    buttonTitle: {
        fontSize: 20,
        fontWeight: '600',
    },
    boxModal: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#0005',
    },
    modal: {
        backgroundColor: "white",
        borderRadius: 20,
        margin: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
    },
    tituloPopup: {
        fontSize: 18,
        fontWeight: '700',
    },
    subTitlePopup: {
        marginTop: 9,
        fontSize: 15,
        fontWeight: '500',
    },
    boxBotaoPopup: {
        marginTop: 20,
    },
    buttaoPopup: {
        backgroundColor: '#dc1e3e',
        borderRadius: 10,
        padding: 8,
        width: 90,
    },
});

export default styles;