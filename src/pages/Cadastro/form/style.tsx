import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,

    },
    form: {
        width: "92%",
        marginTop: 5,
        padding: 10,
    },
    formInput: {
        backgroundColor: '#fff',
        borderColor: '#1114',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        letterSpacing: 0.5,
        marginBottom: -12,
    },
    buttonForm: {
        marginTop: 12,
        paddingVertical: 16,

        backgroundColor: "#dc1e3e",
        borderRadius: 10,
    },
    textButton: {
        fontSize: 20,
        letterSpacing: 0.5,
        fontWeight: "600",
        color: "#ffffff",
    },
    subTitle: {
        fontSize: 20,
        letterSpacing: 0.5,
        color: "#A4A4A4",
    },
    text3: {
        fontSize: 16,
        letterSpacing: 0.5,
        color: "#A4A4A4",
    },
    logIn: {
        fontSize: 16,
        letterSpacing: 0.5,
        color: '#dc1e3e',
        textDecorationLine: 'underline',
    },
    button2: {
        padding: 0,
        margin: 0,
        marginTop: 2,
        backgroundColor: '#fff',
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
        letterSpacing: 0.5,
        fontWeight: '700',
    },
    subTitlePopup: {
        marginTop: 9,
        fontSize: 15,
        letterSpacing: 0.5,
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