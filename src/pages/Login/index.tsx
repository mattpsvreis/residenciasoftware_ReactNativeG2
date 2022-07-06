import React, { useState, useContext } from 'react';
import { View, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { Input, Icon, Button, Image } from 'react-native-elements';
import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import Text from '../../components/Text';

const Login = ({ navigation }: any) => {

    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const { login }: any = useContext(AutenticacaoContext);

    const clearInputs = () => {
        setEmail('');
        setSenha('');
    }

    const handleLogin = async (email: string, senha: string) => {
        setLoading(true);
        const respostaLogin = await login(email, senha);
        setLoading(false);
        if (!respostaLogin) {
            Alert.alert(
                "Erro",
                "Não foi possível realizar o login. Tente novamente.",
                [
                    { text: "OK" },
                ]
            );
        } else {
            clearInputs();
            navigation.navigate('Home');
        }

    }

    const handleNavigateRegister = () => {
        clearInputs();
        navigation.navigate('Cadastro');
    }

    const handleNavigateResetPassword = () => {
        clearInputs();
        navigation.navigate('ForgotPassword');
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoDV_container}>
                <Image source={require('../../assets/logoDV.png')} style={styles.logoDV} height={undefined} width={undefined} />
            </View>
            <Text style={styles.title}>{'Bem-vindo(a) ao Saturno Geek'}</Text>
            <Text style={styles.text}>{'Faça login para continuar'}</Text>
            <Input
                inputStyle={styles.input}
                inputContainerStyle={styles.input_container}
                placeholder='E-mail'
                placeholderTextColor={'#b8b3b3'}
                onChangeText={setEmail}
                value={email}
                leftIcon={<Icon
                    name='envelope'
                    color='#b8b3b3'
                    type='font-awesome'
                    size={20}
                    tvParallaxProperties={undefined}
                />}
                autoCompleteType={undefined}
            />
            <Input
                inputStyle={styles.input}
                inputContainerStyle={styles.input_container}
                placeholder='Senha'
                placeholderTextColor={'#b8b3b3'}
                onChangeText={setSenha}
                value={senha}
                secureTextEntry={true}
                leftIcon={<Icon
                    name='lock'
                    color='#b8b3b3'
                    type='font-awesome'
                    size={27}
                    tvParallaxProperties={undefined}
                />}
                autoCompleteType={undefined}
            />
            {loading ?
                <ActivityIndicator
                    size='large'
                    color='#DC1E3E' />
                :
                <Button
                    buttonStyle={styles.button}
                    titleStyle={{fontSize: 22, fontWeight: '600', letterSpacing: 0.5,}}
                    title='LOGAR'
                    onPress={() => handleLogin(email, senha)}

                />
            }
            <Button
                buttonStyle={styles.button2}
                titleStyle={styles.titulo_esqueceuSenha}
                onPress={handleNavigateResetPassword}
                title='Esqueceu sua senha?'
            />
            <Text style={styles.titulo_naoTemConta}>Não tem uma conta?</Text>
            <Button
                buttonStyle={styles.button3}
                titleStyle={styles.titulo_registrar}
                onPress={handleNavigateRegister}
                title='Registre-se'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    button2: {
        padding: 0,
        margin: 0,
        marginVertical: 10,
        backgroundColor: '#fff',
    },
    button3: {
        padding: 0,
        margin: 0,
        backgroundColor: '#fff',
    },
    logoDV_container: {
        alignItems: 'center',
    },
    logoDV: {
        width: 150,
        height: 150,
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        letterSpacing: 0.5,
        marginBottom: 30,
        color: "#223263",
        textShadowColor: '#223263',
        textShadowRadius: 4,
    },
    text: {
        textAlign: 'center',
        fontSize: 15,
        letterSpacing: 0.5,
        marginBottom: 45,
        color: "#9098B1",
    },
    input_container: {
        backgroundColor: '#fff',
        borderColor: '#1114',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    input: {
        color: '#80879c',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#DC1E3E',
        width: '95%',
        height: 70,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    titulo_esqueceuSenha: {
        color: '#DC1E3E',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 0.5,
        margin: 0,
        textDecorationLine: 'underline',
    },
    titulo_naoTemConta: {
        color: '#9098B1',
        fontSize: 16,
        letterSpacing: 0.5,
        textAlign: 'center',
    },
    titulo_registrar: {
        color: '#DC1E3E',
        fontSize: 16,
        letterSpacing: 0.5,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },

})

export default Login;