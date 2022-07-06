import React from "react";

import { ScrollView } from "react-native";

import Title from "./titulo";
import Form from "./form";

import styles from "./style";

export default function Cadastro({ navigation }: any) {

    return (
        <ScrollView contentContainerStyle={styles.container} >
            <Title />
            <Form navigation={navigation}/>
        </ScrollView>
    );
}