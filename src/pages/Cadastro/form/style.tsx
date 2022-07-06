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
        fontWeight: "600",
        color: "#ffffff",
    },
    subTitle: {
        fontSize: 20,
        color: "#A4A4A4",
    },
    text3: {
        fontSize: 16,
        color: "#A4A4A4",
    },
    logIn: {
        fontSize: 16,
        color: '#dc1e3e',
        textDecorationLine: 'underline',
    },
    button2: {
        padding: 0,
        margin: 0,
        marginTop: 2,
        backgroundColor: '#fff',
    },
});

export default styles;