import MainTemplate from 'Templates/MainTemplate';
import ChoseOption from 'Organizms/ChoseOption/ChoseOption';
import Rules from 'Helpers/Rules';
import options from 'Helpers/Options';
import { getRandom } from 'Helpers/MathHelpers';
import useOption from 'Helpers/ChosenOption';
import { useEffect, useState, useContext, useMemo } from 'react';
import ResultBoard from 'Organizms/ResultBoard/ResultBoard';
import { GameContext } from 'App';

const BasicGame = ({}) => {
  let { isExtended } = useContext(GameContext);
  const [result, setResult] = useState('draw');
  const [setOption, isChosen, reset, chosenOption] = useOption();

  let getRandOpt = useMemo(() => {
    return () => getRandom(isExtended ? 5 : 3);
  }, [isExtended]);

  let storage = useMemo(
    () => (isExtended ? 'roshamboScoreExtended' : 'roshamboScore'),
    [isExtended]
  );

  const [randomOption, setRandomOption] = useState(getRandOpt());
  const [score, setScore] = useState(Number(localStorage[storage]) || 0);

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
  }, [score]);

  useEffect(() => {
    setScore(Number(localStorage[storage]) || 0);
  }, [isExtended]);

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
