import {InsectState} from './InsectContext';

export interface InsectPayload {
  name: string;
  quantity: number;
}

type InsectAction = {type: 'insectProperties'; payload: InsectPayload};

export const InsectReducer = (
  state: InsectState,
  action: InsectAction,
): InsectState => {
  const {type} = action;

  switch (type) {
    case 'insectProperties':
      return {
        ...state,
        insects: [action.payload, ...state.insects],
      };
    default:
      return state;
  }
};
