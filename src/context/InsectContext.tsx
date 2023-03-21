import {createContext, useReducer} from 'react';
import React from 'react';
import {InsectReducer} from './InsectReducer';

export interface InsectArray {
  name: string;
  quantity: number;
}

//Define como va lucir y que información tendrá el context
export interface InsectState {
  insects: InsectArray[];
}

//Define el estado inicial, como será el estado al abrir la app por 1 vez
export const insectInitialState: InsectState = {
  insects: [],
};

//Definir como luce y que tendrá el value del context
export interface InsectContextProps {
  insectState: InsectState;
  saveData: (insectName: string, insectQuantity: number) => void;
}

//Creación del contexto, la información que tendrá será en base a la interfaz
export const InsectContext = createContext({} as InsectContextProps);

//Componente proveedor del estado
export const InsectProvider = ({children}: any) => {
  const [insectState, dispatch] = useReducer(InsectReducer, insectInitialState);

  const saveData = (insectName: string, insectQuantity: number) => {
    const insects = {name: insectName, quantity: insectQuantity};
    dispatch({type: 'insectProperties', payload: insects});
  };

  return (
    <InsectContext.Provider value={{insectState, saveData}}>
      {children}
    </InsectContext.Provider>
  );
};
