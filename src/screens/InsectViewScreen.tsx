import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../Styles/InsectScreenStyle';
import {InsectContext} from '../context/InsectContext';
import {StackScreenProps} from '@react-navigation/stack/lib/typescript/src/types';

//Se extiende por si se reciben más información a aparte de la del Stack
//StackScreenProps Recibe un objeto y las propiedades del objeto
interface IProps extends StackScreenProps<any, any> {}

const InsectViewScreen = ({navigation}: IProps) => {
  const {insectState} = useContext(InsectContext);

  const checkIndexIsEven = (n: number) => {
    return n % 2 === 0;
  };

  return (
    <View style={styles.sectionInsect}>
      <View style={styles.sectionTableHead}>
        <View>
          <Text style={styles.sectionTableTitle}>Insecto</Text>
        </View>
        <View>
          <Text style={styles.sectionTableTitle}>Cantidad</Text>
        </View>
      </View>

      {insectState.insects.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.sectionTableRow,
            {backgroundColor: checkIndexIsEven(index) ? 'white' : '#EBDEF0'},
          ]}
          onPress={() =>
            navigation.navigate('InsectDescription', {
              insectName: item.name,
              insectQuantity: item.quantity,
            })
          }>
          <View>
            <Text style={styles.sectionRowSubtitle}>{item.name}</Text>
          </View>
          <View>
            <Text style={styles.sectionRowSubtitle}>{item.quantity}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default InsectViewScreen;
