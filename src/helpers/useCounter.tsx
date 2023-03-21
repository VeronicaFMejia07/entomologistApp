import {useState} from 'react';

const useCounter = () => {
  const [value, setValue] = useState<number>(0);

  const increment = (num: number) => {
    if (num > 0) {
      setValue(value + num);
    }
  };

  const decrement = (num: number) => {
    if (value > 0) {
      setValue(value - num);
    }
  };

  return {
    value,
    increment,
    setValue,
    decrement,
  };
};
export default useCounter;
