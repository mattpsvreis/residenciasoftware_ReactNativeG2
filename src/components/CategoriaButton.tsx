import React from 'react'
import { TouchableHighlight, View } from 'react-native';
import { Icon, Image } from 'react-native-elements';
import Text from './Text';

const CategoriaButton = (props: any) => {
  
  const iconName = () => {
    if(props.categoria.nomeCategoria === 'Camisas') {
      return require(`../assets/icons/shirts.png`)
    } else if (props.categoria.nomeCategoria === 'Calças') {
      return require(`../assets/icons/pants.png`)
    } else if (props.categoria.nomeCategoria === 'Shorts') {
      return require(`../assets/icons/shorts.png`)
    } else if (props.categoria.nomeCategoria === 'Casacos') {
      return require(`../assets/icons/hoodies.png`)
    } else if (props.categoria.nomeCategoria === 'Calçados') {
      return require(`../assets/icons/shoes.png`)
    } else {
      return undefined;
    }
  };

  const handlePress = () => {
    props.navigation.navigate({name: 'Categoria', params: {
      categoria: props.categoria,
    }})
  }
  
  return (
    <View style={props.styles.categoriaContainer}>
      <TouchableHighlight style={props.styles.categoriaButton} onPress={handlePress} underlayColor={'#dc1e3e'}>
        <Image
          source={iconName()}
          style={props.styles.categoriaIcon}
          width={undefined}
          height={undefined}
        />
      </TouchableHighlight>
      <Text style={props.styles.nomeCategoria}>{props.categoria.nomeCategoria}</Text>
    </View>
  )
}

export default CategoriaButton;