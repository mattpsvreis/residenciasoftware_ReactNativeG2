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
        letterSpacing: 0.5,
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
        letterSpacing: 0.5,
    },
    profileEmail: {
        fontSize: 14,
        letterSpacing: 0.5,
        marginTop: 2,
    },
    profileId: {
        fontSize: 14,
        letterSpacing: 0.5,
        marginTop: 2,
    },
    profileResetPassword: {
        color: '#DC1E3E',
        marginTop: 2,
        fontSize: 14,
        letterSpacing: 0.5,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    logoutButton: {
        backgroundColor: '#dc1e3e',
        height: 57,
        borderRadius: 5,
    },
    logoutButtonText: {
        fontSize: 18,
        letterSpacing: 0.5,
    }
})

export default styles;