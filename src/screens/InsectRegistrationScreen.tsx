import React, { useState, useContext } from 'react'
import { Text, TextInput, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import useCounter from '../helpers/useCounter';
import { styles } from '../Styles/InsectScreenStyle';
import { InsectContext } from '../context/InsectContext';

export interface Animal {
  name: string;
  amount?: number;
}

export const InsectRegistrationScreen = () => {

  const { value, increment, setValue, decrement } = useCounter();
  const [name, setName] = useState<string>('')
  const { saveData } = useContext(InsectContext)

  const clean = () => {
    setName('')
    setValue(0)
  }

  return (
    <SafeAreaView style={styles.sectionSafeAreaView}>
      <View style={styles.sectionViewContainer}>
        <Text style={styles.sectionTextTitle}>Contador de insectos</Text>
        <Text style={styles.sectionLabelInsect}>Nombre de insecto</Text>
        <TextInput onChangeText={setName} value={name} style={styles.sectionInputName} keyboardType='default' />
        <Text style={styles.sectionLabelInsect}>Cantidad</Text>
        <TextInput editable={false} style={styles.sectionInputQuantity} keyboardType={'numeric'}>{value}</TextInput>

        <ButtonComponent
          title={"-1"}
          onPress={() => decrement(1)}
          position={'positionRight'}
        />

        <ButtonComponent
          title={"+1"}
          onPress={() => increment(1)}
          position={'positionLeft'}
        />

        <TouchableOpacity onPress={() => clean()}>
          <View style={styles.sectionViewButtonClean}>
            <Text style={styles.sectionTextClean}>Limpiar</Text>
          </View>
        </TouchableOpacity>


        {
          name === '' ?
            <TouchableOpacity disabled>
              <View style={[styles.sectionViewButtonSave, { opacity: 0.8 }]}>
                <Text style={styles.sectionTextSave}>Guardar</Text>
              </View>
            </TouchableOpacity>
            : <TouchableOpacity onPress={() => { saveData(name, value), clean() }} >
              <View style={styles.sectionViewButtonSave}>
                <Text style={styles.sectionTextSave}>Guardar</Text>
              </View>
            </TouchableOpacity>
        }
      </View>
    </SafeAreaView>
  )
}


