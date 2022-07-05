import React { useState } from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import auth from '@react-native-firebase/auth';

const ForgotPassword = (navigation) => {
    const [email, setEmail = useState(' ');
    const recover = () => {
      if(email !== ''){
        console.log(email);
        auth()
        .setPasswordResetEmail(email)
        .then((r) => {
           Alert.alert('Atenção',
    'Enviamos um email de recuperação de senha para o seguinte endereço:'+ email,
      [{text: 'OK', onPress: () => navigation.goBack()}]
       );
         })
        .catch((e) => {
           console.log('ForgotPassword, recover: ' + e);
           switch (e.code){
           case 'auth/user-not-found':
             Alert.alert('Erro', 'Usuário não cadastrado.');
             break;
           case 'auth/invalid-email':
             Alert.alert('Erro', 'Email inválido.');
             break;
        }
        });
    } else{
       Alert.alert('Erro', 'Por favor, digite um email cadastrado.');
    };
    
    return {
    <View style={styles.container}>
    <TextInput style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        returnKeyType="go"
            onChangeText={(t) => setEmail(t)}
            autoFocus={true}
        />
     <Button texto="Recuperar" onClick={recover} />
       
    <View/>
    );
    };
    
    const Styles = StyleSheet.create({
     container: {
      flex:1,
      alignItens: 'center',
     },
    
     input: {
      width: '95%',
      height: 50,
      color: "#9098B1",
      borderBottonColor: '#DC1E3E',
      borderBottomWidth: 2,
      fontSize: 15,
      paddingLeft: 2,
      paddingBottom: 1,
      marginTop: 40,
     },
    });
    
    export default ForgotPassword;