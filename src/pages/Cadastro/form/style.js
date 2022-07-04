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
        height: 50,
        marginVertical: 12,
        paddingLeft: 15,
        borderRadius: 50,
        fontSize: 18,

        backgroundColor: "#f6f6f6",
    },

    buttonForm: {
        alignItems: "center",
        justifyContent: "center",

        width: "90%",
        margin: 10,
        marginLeft: 15,
        marginTop: 20,
        paddingVertical: 16,

        backgroundColor: "#FF0043",
        borderRadius: 50,
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