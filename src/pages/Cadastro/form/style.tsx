import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        alignItems: "center",
        justifyContent: "space-around",

        width: "100%",
        // height: "100%",

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
        marginBottom: 12,
        fontSize: 16,
    },

    buttonForm: {
        marginLeft: 15,
        marginTop: 20,
        paddingVertical: 16,

        backgroundColor: "#dc1e3e",
        borderRadius: 10,
    },

    textButton: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#ffffff",
    },

    subTitle: {
        fontSize: 20,
        color: "#A4A4A4",
    },
});

export default styles;