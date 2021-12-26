import { PolishedGameOption } from 'Atoms/GameOption/GameOption';
import { GamesOptionsContainer } from './ChoseOption.style';
import { ReactComponent as Triangle } from 'Images/bg-triangle.svg';

const ChoseOption = ({ setOption }) => {
  return (
    <GamesOptionsContainer>
      <PolishedGameOption
        type="rock"
        onClick={() => {
          setOption('rock');
        }}
      />
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

      {/* <svg width="100" height="100" viewBox="0 0 100 100">
        <polyline
          points="0,100 100,100 50,20 0,100"
          stroke="black"
          strokeWidth="1"
          fill="none"
        />
      </svg> */}
      <Triangle />
    </GamesOptionsContainer>
  );
};

export default ChoseOption;
