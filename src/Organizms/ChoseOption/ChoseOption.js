import { PolishedGameOption } from 'Atoms/GameOption/GameOption';
import { GamesOptionsContainer } from './ChoseOption.style';
import { ReactComponent as Triangle } from 'Images/bg-triangle.svg';

const ChoseOption = ({ setOption }) => {
  return (
    <GamesOptionsContainer>
      <PolishedGameOption
        type="paper"
        onClick={() => {
          setOption('paper');
        }}
      />
      <PolishedGameOption
        type="scissors"
        onClick={() => {
          setOption('scissors');
        }}
      />
      <PolishedGameOption
        type="rock"
        onClick={() => {
          setOption('rock');
        }}
      />

      <Triangle />
    </GamesOptionsContainer>
  );
};

export default ChoseOption;
