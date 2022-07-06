import React from "react";
import { View } from "react-native";

import styles from "./style";
import Title from "./titulo";
import Form from "./form";

export default function Cadastro(navigation) {

    return (
        <View style={styles.container} >
            <Title />
            <Form />
        </View>
    );
}