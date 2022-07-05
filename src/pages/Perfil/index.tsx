import React from 'react'
import { AutenticacaoContext } from '../../context/AutenticacaoContext'

import { TouchableOpacity, View } from 'react-native'
import { Button, Image } from 'react-native-elements'

import Text from '../../components/Text'

import styles from './styles'


export default function Perfil({ navigation }: any) {

  const { usuario } = React.useContext(AutenticacaoContext);

  const handleResetPassword = () => {
    return null; //TODO
  }

  const handleLogout = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.body}>
      <Text style={styles.title}>Perfil</Text>
      <View style={styles.mainContainer}>
        <Image
          style={styles.profilePhoto}
          source={{ uri: `${usuario.foto}` }}
          width={undefined}
          height={undefined}
        />
        <Text style={styles.profileName}>{usuario.name}</Text>
        <Text style={styles.profileEmail}>{usuario.email}</Text>
        <Text style={styles.profileId}>ID: {usuario.id}</Text>
        <TouchableOpacity onPress={handleResetPassword}>
          <Text style={styles.profileResetPassword}>Alterar senha</Text>
        </TouchableOpacity>
      </View>
      <Button buttonStyle={styles.logoutButton} titleStyle={styles.logoutButtonText} onPress={handleLogout} title='SAIR' />
    </View>
  )
}
