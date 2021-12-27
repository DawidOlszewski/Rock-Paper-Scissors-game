import MainTemplate from 'Templates/MainTemplate';
import ChoseOption from 'Organizms/ChoseOption/ChoseOption';
import Rules from 'Helpers/Rules';
import options from 'Helpers/Options';
import { getRandom } from 'Helpers/MathHelpers';
import useOption from 'Helpers/ChosenOption';
import { useEffect, useState } from 'react';
import ResultBoard from 'Organizms/ResultBoard/ResultBoard';

const BasicGame = () => {
  const [setOption, isChosen, reset, chosenOption] = useOption();
  const [randomOption, setRandomOption] = useState(getRandom(3));
  const [score, setScore] = useState(Number(localStorage.roshamboScore) || 0);
  const [result, setResult] = useState('draw');

  useEffect(() => {
    if (isChosen === false) {
      setRandomOption(getRandom(3));
    } else {
      setResult(Rules[chosenOption][options[randomOption]]);
    }
  }, [isChosen]);

  useEffect(() => {
    if (result === 'win') {
      setScore((s) => s + 1);
    }
  }, [result]);

  useEffect(() => {
    localStorage.roshamboScore = score;
  }, [score]);

  return (
    <MainTemplate score={score}>
      {isChosen ? (
        <ResultBoard
          chosenOption={chosenOption}
          randomOption={randomOption}
          result={result}
          reset={reset}
        />
      ) : (
        <ChoseOption setOption={setOption} />
      )}
    </MainTemplate>
  );
};

export default BasicGame;
