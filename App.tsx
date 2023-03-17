import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import { InsectProvider } from './src/context/InsectContext';

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <BottomTabNavigation/>
      </AppState>
    </NavigationContainer>
  )
}

//Aca se envuelven todos los hijos en el provider
const AppState = ({children}:any) => {
  return(
    <InsectProvider>
      {children}
    </InsectProvider>
  )
}