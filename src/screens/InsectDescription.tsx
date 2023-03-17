import React from 'react'
import { View, Text, Modal, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import { RootStackParams } from '../navigation/StackNavigation';
import { styles } from '../Styles/DescriptionScreenStyle';

//Como objeto se le envia la definicion de rutas en el stack principal y como propiedad se le envia la página que contiene la info a mostrar
interface IProps extends StackScreenProps<RootStackParams, 'InsectDescription'> { };

const InsectDescription = ({ route }: IProps) => {
  const params = route.params;
  const { insectName, insectQuantity } = params;

  return (
    <View style={styles.containerDescription}>
      <View style={styles.containerName}>
        <Text style={styles.nameTitle}>Nombre: </Text>
        <Text style={styles.nameDescription}>{insectName}</Text>
      </View>
      <View style={styles.containerQuantity}>
        <Text style={styles.quantityTitle}>Cantidad: </Text>
        <Text style={styles.nameDescription}>{insectQuantity}</Text>
      </View>

      <View style={styles.containerImage}>
        <Image source={require('../assets/insects.jpg')}
          style={styles.image}
        />
      
      </View>
    </View>
  )
}

export default InsectDescription
