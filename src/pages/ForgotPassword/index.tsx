import React from 'react';
import AxiosInstance from '../../api/AxiosInstance';

import { View, Modal, TouchableHighlight, ActivityIndicator } from 'react-native';
import { Button, Icon, Image, Input, Text } from 'react-native-elements';

import styles from './styles';

const ForgotPassword = ({ navigation }: any) => {
  const [id, setId] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [isLoading, setLoading] = React.useState(false);
  const [isPopupError, setPopupError] = React.useState(false);
  const [isPopupSucess, setPopupSucess] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  function numRegex(str: string) {
    return /[0-9]/.test(str);
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
      if (
        id === '' ||
        name === '' ||
        email === '' ||
        password === '' ||
        confirmPassword === ''
      ) {
        setErrorMessage('Um de seus campos está vazio!');
        setPopupError(true);
        setLoading(false);
      } else if (!numRegex(id)) {
        setErrorMessage('Seu id deve conter somente numeros!');
        setPopupError(true);
        setLoading(false);
      } else if (!nameRegex(name)) {
        setErrorMessage('Seu nome contém caracteres inválidos!');
        setPopupError(true);
        setLoading(false);
      } else if (!emailRegex(email)) {
        setErrorMessage(e => 'Seu e-mail é inválido!')
        setPopupError(true)
        setLoading(false)
      } else if (password.length < 5) {
        setErrorMessage('Sua senha é muito fraca!');
        setPopupError(true);
        setLoading(false);
      } else if (password != confirmPassword) {
        setErrorMessage('Suas senhas não coincidem!');
        setPopupError(true);
        setLoading(false);
      } else {
        handleAlterarPassword();
      }
    }, 1000);
  }

  const handleAlterarPassword = async () => {
    try {
      await AxiosInstance.post(
        '/autenticacao/recuperar-senha',
        {
          idUsuario: parseInt(id),
          nomeUsuario: name,
          email: email,
          senha: password,
        },
      );
      setPopupSucess(true);
      setLoading(false);
    } catch (error) {
      console.log("Erro ao alterar a senha: " + JSON.stringify(error));
    }
    setLoading(false);
  };

  const handleReturn = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <TouchableHighlight onPress={handleReturn} underlayColor='#dc1e3e' style={{ borderRadius: 150 }}>
          <Icon
            name='arrow-left'
            color="#dc1e3e"
            type='material-community'
            size={36}
            tvParallaxProperties={undefined}
          />
        </TouchableHighlight>
        <Text style={styles.title}>Alteração de Senha</Text>
      </View>
      <View style={styles.inputBox}>
        <View style={styles.logoDV_container}>
          <Image source={require('../../assets/logoDV.png')} style={styles.logoDV} height={undefined} width={undefined} />
        </View>
        <Input
          placeholder="Id"
          onChangeText={setId}
          inputContainerStyle={styles.inputContainer}
          value={id}
          placeholderTextColor={'#a49595'}
          autoCompleteType={undefined}
        />
        <Input
          placeholder="Nome"
          onChangeText={setName}
          inputContainerStyle={styles.inputContainer}
          value={name}
          placeholderTextColor={'#a295a4'}
          autoCompleteType={undefined}
        />
        <Input
          placeholder="E-mail"
          onChangeText={setEmail}
          inputContainerStyle={styles.inputContainer}
          value={email}
          placeholderTextColor={'#a295a4'}
          autoCompleteType={undefined}
        />
        <Input
          secureTextEntry={true}
          placeholder="Digite sua nova senha"
          onChangeText={setPassword}
          inputContainerStyle={styles.inputContainer}
          value={password}
          placeholderTextColor={'#a295a4'}
          autoCompleteType={undefined}
        />
        <Input
          secureTextEntry={true}
          placeholder="Confirmar nova senha"
          onChangeText={setConfirmPassword}
          inputContainerStyle={styles.inputContainer}
          value={confirmPassword}
          placeholderTextColor={'#a295a4'}
          autoCompleteType={undefined}
        />
      </View>
      <View style={styles.containerButtons}>
        {isLoading ? (
          <ActivityIndicator size='large' color='#DC1E3E' />
        ) : (
          <Button
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            title="ALTERAR SENHA"
            onPress={() => {
              setLoading(true);
              verifyCredentials();
            }}
          />
        )}
      </View>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={isPopupError}
        onRequestClose={() => setPopupError(false)}>
        <View style={styles.boxModal}>
          <View style={styles.modal}>
            <Text style={styles.tituloPopup}>Erro ao alterar a senha</Text>
            <Text style={styles.subTitlePopup}>{errorMessage}</Text>
            <Button
              title="VOLTAR"
              containerStyle={styles.boxBotaoPopup}
              buttonStyle={styles.buttaoPopup}
              titleStyle={{ fontSize: 18 }}
              onPress={() => {
                setPopupError(false);
                setErrorMessage(e => '');
              }}
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
            <Text style={styles.tituloPopup}>Senha alterada com sucesso!</Text>
            <Icon
              name="check"
              style={{ paddingTop: 20 }}
              size={40}
              color="#dc1e3e"
              tvParallaxProperties={undefined}
            />
            <Button
              title="VOLTAR"
              containerStyle={styles.boxBotaoPopup}
              buttonStyle={styles.buttaoPopup}
              titleStyle={{ fontSize: 18 }}
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ForgotPassword;