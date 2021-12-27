import MainTemplate from 'Templates/MainTemplate';
import ChoseOption from 'Organizms/ChoseOption/ChoseOption';
import Rules from 'Helpers/Rules';
import options from 'Helpers/Options';
import { getRandom } from 'Helpers/MathHelpers';
import useOption from 'Helpers/ChosenOption';
import { useEffect, useState } from 'react';
import ResultBoard from 'Organizms/ResultBoard/ResultBoard';

const BasicGame = ({ isExtended }) => {
  const getRandOpt = () => getRandom(isExtended ? 5 : 3);
  let storage = isExtended ? 'roshamboScoreExtended' : 'roshamboScore';
  // console.log(storage);

  const [setOption, isChosen, reset, chosenOption] = useOption();
  const [randomOption, setRandomOption] = useState(getRandOpt());
  const [score, setScore] = useState(Number(localStorage[storage]) || 0);
  const [result, setResult] = useState('draw');

  useEffect(() => {
    if (isChosen === false) {
      setRandomOption(getRandOpt());
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
    localStorage[storage] = score;
    console.log('changed');
    console.log(localStorage[storage]);
  }, [score]);

  return (
    <MainTemplate score={score} isExtended={isExtended}>
      {isChosen ? (
        <ResultBoard
          chosenOption={chosenOption}
          randomOption={randomOption}
          result={result}
          reset={reset}
        />
      ) : (
        <ChoseOption setOption={setOption} isExtended={isExtended} />
      )}
    </MainTemplate>
  );
};

export default BasicGame;
