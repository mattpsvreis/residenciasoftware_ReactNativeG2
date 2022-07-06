import React, { useState } from "react";
import AxiosInstance from "../../../api/AxiosInstance";

import { View, Text, Alert, Modal } from "react-native";
import { Button, Icon, Input } from "react-native-elements";

import styles from "./style"

export default function Form(props: any) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imagem, setImagem] = useState('');

    const [isPopupError, setPopupError] = useState(false)
    const [isPopupSucess, setPopupSucess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');

    const [isLoading, setLoading] = useState(false)

    const clearInputs = () => {
        setName('');
        setEmail('');
        setPassword('');
        setImagem('');
    }

    function nameRegex(str: string) {
        return /^[A-Za-z0-9 ]+$/.test(str)
    }

    function emailRegex(str: string) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function verifyCredentials() {
        setTimeout(function () {
            if (name === '' || email === '' || password === '') {
                setErrorMessage(e => 'Um de seus campos está vazio!')
                setPopupError(true)
                setLoading(false)
            } else if (!nameRegex(name)) {
                setErrorMessage(e => 'Seu nome contém caracteres inválidos!')
                setPopupError(true)
                setLoading(false)
            } else if (password.length < 5) {
                setErrorMessage(e => 'Sua senha é muito fraca!')
                setPopupError(true)
                setLoading(false)
            } else if (!emailRegex(email)) {
                setErrorMessage(e => 'Seu e-mail é inválido!')
                setPopupError(true)
                setLoading(false)
            } else if (imagem.length != 0 && imagem.substring(0, 19) != 'https://i.imgur.com') {
                setErrorMessage(e => 'Insira um link do Imgur! https://imgur.com')
                setPopupError(true)
                setLoading(false)
            } else {
                handleCadastrar()
            }
        }, 1000)
    }

    const handleReturn = () => {
        clearInputs();
        props.navigation.goBack();
    }

    const handleCadastrar = async () => {
        try {
            setLoading(true)
            await AxiosInstance.post('/autenticacao/registro', {
                nameUsuario: name, email: email, fotoPerfil: imagem, password: password
            })
            Alert.alert(
                "Sucesso",
                "Usuário cadastrado com sucesso. Retornando a página de login.",
                [
                    { text: "OK" },
                ]
            );
            clearInputs();
            setLoading(false);
            props.navigation.goBack();
        } catch (error) {
            console.log('Erro ao cadastrar o cliente: ' + JSON.stringify(error))
        }
    }

    return (
        <View
            style={styles.formContext}
        >
            <View style={styles.form}>
                <Input
                    onChangeText={setName}
                    placeholder="Nome Completo"
                    keyboardType="default"
                    style={styles.formInput}
                    autoCompleteType={undefined}
                />
                <Input
                    onChangeText={setEmail}
                    placeholder="E-mail"
                    keyboardType="email-address"
                    style={styles.formInput}
                    autoCompleteType={undefined}
                />
                <Input
                    onChangeText={setPassword}
                    placeholder="Senha"
                    keyboardType="default"
                    secureTextEntry={true}
                    style={styles.formInput}
                    autoCompleteType={undefined}
                />
                <Input
                    onChangeText={setImagem}
                    placeholder="Endereço Imagem de Perfil"
                    keyboardType="default"
                    style={styles.formInput}
                    autoCompleteType={undefined}
                />
                <Button
                    buttonStyle={styles.buttonForm}
                    titleStyle={styles.textButton}
                    onPress={verifyCredentials}
                    title='CADASTRAR'
                />
            </View>
            <Text style={styles.text3}>Já tem uma conta?</Text>
            <Button
                buttonStyle={styles.button2}
                titleStyle={styles.logIn}
                onPress={handleReturn}
                title='Logar'
            />
            <Modal
                animationType={'slide'}
                transparent={true}
                visible={isPopupError}
                onRequestClose={() => setPopupError(false)}>
                <View style={styles.boxModal}>
                    <View style={styles.modal}>
                        <Text style={styles.tituloPopup}>Erro ao se registrar</Text>
                        <Text style={styles.subTitlePopup}>{errorMessage}</Text>
                        <Button
                            title='VOLTAR'
                            containerStyle={styles.boxBotaoPopup}
                            buttonStyle={styles.buttaoPopup}
                            titleStyle={{fontSize: 18}}
                            onPress={() => { setPopupError(false); setErrorMessage(e => '') }}
                        />
                    </View>
                </View>
            </Modal>
            <Modal
                animationType={'slide'}
                transparent={true}
                visible={isPopupSucess}
                onRequestClose={() => setPopupSucess(false)}>
                <View style={styles.boxModal}>
                    <View style={styles.modal}>
                        <Text style={styles.tituloPopup}>Sucesso ao se registrar</Text>
                        <Icon
                            name="check"
                            style={{ paddingTop: 20 }}
                            size={40}
                            color="#dc1e3e"
                            tvParallaxProperties={undefined}
                        />
                        <Button
                            title='VOLTAR'
                            containerStyle={styles.boxBotaoPopup}
                            buttonStyle={styles.buttaoPopup}
                            titleStyle={{fontSize: 18}}
                            onPress={() => props.navigation.goBack()}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
}