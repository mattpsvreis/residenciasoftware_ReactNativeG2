import React, { useState } from "react";
import AxiosInstance from "../../../api/AxiosInstance";

import { View, Text } from "react-native";
import { Button, Input } from "react-native-elements";

import styles from "./style"

export default function Form(props: any) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const imagem = '';

    const [isLoading, setLoading] = useState(false)

    const handleReturn = () => {
        props.navigation.goBack();
    }

    const handleCadastrar = async () => {
        try {
            const res = await AxiosInstance.post('/autenticacao/registro',{ 
                nomeUsuario: name, email: email, fotoPerfil: imagem, senha: password
            })
            setLoading(false)
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
                <Button
                    buttonStyle={styles.buttonForm}
                    titleStyle={styles.textButton}
                    onPress={handleCadastrar}
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
        </View>
    );
}