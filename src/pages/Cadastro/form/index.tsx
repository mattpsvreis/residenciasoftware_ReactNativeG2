import React, { useState } from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { Button, Input } from "react-native-elements";

import styles from "./style"

export default function Form({ navigation }: any) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorName, setErrorName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const alternar = () => {
        navigation.navigate("");
    }

    const handleCadastrar = async () => {
        return null; //TODO
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
            <TouchableOpacity onPress={alternar}>
                <Text style={styles.subTitle}>Já tem uma conta? Log In</Text>
            </TouchableOpacity>
        </View>
    );
}