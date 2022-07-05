import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body: {
        alignItems: 'stretch',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: '#fff',
        height: '100%',
    },
    title: {
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
    },
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    profilePhoto: {
        width: 280,
        height: 280,
        borderRadius: 140,
        borderWidth: 4,
        borderColor: '#dc1e3e',
        marginBottom: 10,
    },
    profileName: {
        fontSize: 28,
    },
    profileEmail: {
        fontSize: 14,
    },
    logoutButton: {
        backgroundColor: '#dc1e3e',
    },
})

export default styles;