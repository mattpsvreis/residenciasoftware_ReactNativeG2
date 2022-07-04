import React, { useState } from "react";
import styles from "./style"

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Keyboard,
} from "react-native";


export default function Form(navigation) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorName, setErrorName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const alternar = () => {
        navigation.navigate("");
    }

    const validation = () => {
        let error = false;
        setErrorName("");
        setErrorEmail("");
        setErrorPassword("");

        if (name == null) {
            setErrorName("Preencha seu nome corretamente");
            error = true;
        }

        /* Variavel regex para validação do campo email */
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (!re.test(String(email).toLowerCase())) {
            setErrorEmail("Preencha seu email corretamente");
            error = true;
        }

        if (password == null) {
            setErrorPassword("Preencha sua senha corretamente");
            error = true;
        }

        return !error;
    }

    return (
        <View
            onPress={Keyboard.dismiss}
            style={styles.formContext}
        >
            <View style={styles.form}>

                <TextInput
                    onChangeText={value => {
                        setName(value)
                        setErrorName(null)
                    }}

                    placeholder="Nome Completo"
                    keyboardType="default"
                    style={styles.formInput}
                    errorMessage={errorName}
                />

                <TextInput
                    onChangeText={value => {
                        setEmail(value)
                        setErrorEmail(null)
                    }}

                    placeholder="E-mail"
                    keyboardType="email-address"
                    style={styles.formInput}
                    errorMessage={errorEmail}
                />

                <TextInput
                    onChangeText={value => {
                        setPassword(value)
                        setErrorPassword(null)
                    }}

                    placeholder="Senha"
                    keyboardType="default"
                    style={styles.formInput}
                    errorMessage={errorPassword}
                />

                <TouchableOpacity
                    style={styles.buttonForm}
                /* onPress={} */
                >
                    <Text style={styles.textButton}>Cadastrar</Text>
                </TouchableOpacity>


            </View>

            <TouchableOpacity
                onPress={alternar}
            >
                <Text style={styles.subTitle}>Já tem uma conta? Log In</Text>
            </TouchableOpacity>


        </View>
    );
}