import React from 'react';
import {Text, View, StyleSheet, TouchableNativeFeedback} from 'react-native';

//El touchableNativeFeedback tiene estilos definidos, asi que no es muy personalizable, se personaliza el efecto de burbuja cuando se le da clic, asignando el color, el borde y el tamaño de radio que va tener la burbuja
interface IPropsButton {
  title: string;
  onPress: () => void;
  position?: 'positionRight' | 'positionLeft';
  action?: 'btn';
}

const ButtonComponent = ({
  title,
  onPress,
  position = 'positionRight',
  action,
}: IPropsButton) => {
  return (
    <View
      style={[
        styles.sectionTouchable,
        position === 'positionRight'
          ? styles.positionRight
          : styles.positionLeft,
      ]}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('black', true, 20)}>
        <View
          style={
            action === 'btn'
              ? styles.sectionButtonSaveAndClean
              : styles.sectionViewButtonAdd
          }>
          <Text style={styles.sectionViewTextAdd}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default ButtonComponent;
const styles = StyleSheet.create({
  sectionTouchable: {
    position: 'absolute',
  },
  positionRight: {
    right: 60,
    top: 250,
  },
  positionLeft: {
    left: 250,
    top: 250,
  },
  sectionViewButtonAdd: {
    backgroundColor: '#8E44AD',
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
  },
  sectionViewTextAdd: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  sectionViewButtonSubtract: {
    backgroundColor: 'purple',
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
  },
  sectionViewTextSubtract: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  sectionButtonSaveAndClean: {
    backgroundColor: 'green',
    top: 80,
    width: 100,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
  },
});
