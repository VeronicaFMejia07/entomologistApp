import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../Styles/HomeScreenStyle';

const HomeScreen = () => {
  return (
    <View style={styles.containerHome}>
      <Text style={styles.titleHome}>Bienvenido al EntomologoApp</Text>
      <Icon name="check-square-o" size={65} color="purple" />
      <Text style={styles.subtitleHome}>
        En esta aplicación tendrás la facilidad de contar e ingresar tus
        insectos y poder visualizar el registro que llevas de ellos.
      </Text>
    </View>
  );
};

export default HomeScreen;
