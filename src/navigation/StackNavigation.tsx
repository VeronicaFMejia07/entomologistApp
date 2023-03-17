import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import InsectDescription from '../screens/InsectDescription';
import InsectViewScreen from '../screens/InsectViewScreen';

//Definir las rutas y que argumentos reciben
export type RootStackParams = {
    InsectViewScreen: undefined,
    InsectDescription: { insectName: string, insectQuantity: number }
}

const Stack = createStackNavigator<RootStackParams>();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='InsectViewScreen' options={{title: 'Registro', headerShown: false}} component={InsectViewScreen} />
            <Stack.Screen name="InsectDescription" options={{title: 'Descripción del insecto'}} component={InsectDescription} />
        </Stack.Navigator>
    )
}

export default StackNavigation
