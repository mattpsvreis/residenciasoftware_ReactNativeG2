import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

export default function Title() {

    return (
        <View style={styles.boxTitle} >
            <Image
                style={styles.tinyLogo}
                source={require('../../../assets/logo.png')} />
            <Text style={styles.textTitle} >Vamos começar</Text>
            <Text style={styles.subTitle} >Criar uma nova conta</Text>
        </View>
    );
}
