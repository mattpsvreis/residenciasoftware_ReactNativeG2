import React, { useState, useContext } from 'react';
import { View, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { Input, Text, Icon, Button, Image } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AutenticacaoContext } from '../../context/AutenticacaoContext';


const Login = ({ navigation }: any) => {

    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const { login }: any = useContext(AutenticacaoContext);

    const handleLogin = async (email: string, senha: string) => {
        console.log(`Email: ${email} - Senha: ${senha}`)

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
            navigation.navigate('Home');
        }

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
                    color='#fff' />
                :
                <Button
                    buttonStyle={styles.button}
                    title='Logar'
                    onPress={() => handleLogin(email, senha)}

                />
            }
            <TouchableOpacity onPress={() => { }}>
                <Text style={styles.titulo_esqueceuSenha}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
                <Text style={styles.titulo_naoTemConta}>Não tem uma conta?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
                <Text style={styles.titulo_registrar}>Registre-se</Text>
            </TouchableOpacity>
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
        marginBottom: 30,
        color: "#223263",
        textShadowColor: '#223263',
        textShadowRadius: 4,
    },
    text: {
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 45,
        color: "#9098B1",
    },
    input_container: {
        backgroundColor: '#fff',
        borderColor: '#e6e6e9',
        borderWidth: 1,
        padding: 10,
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
        justifyContent: 'center'
    },
    titulo_esqueceuSenha: {
        color: '#DC1E3E',
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
    },
    titulo_naoTemConta: {
        color: '#9098B1',
        marginTop: 20,
        textAlign: 'center',
    },
    titulo_registrar: {
        color: '#DC1E3E',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
    },

})

export default Login;