import { useState } from 'react';
const useOption = () => {
  const [chosenOption, setChosenOption] = useState('');
  const setOption = (a) => setChosenOption(a);
  const isChosen = chosenOption !== '';
  const reset = () => setChosenOption('');
  return [setOption, isChosen, reset, chosenOption];
};

export default useOption;
