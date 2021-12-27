import { PolishedGameOption } from 'Atoms/GameOption/GameOption';
import { GamesOptionsContainer } from './ChoseOption.style';
import { ReactComponent as Triangle } from 'Images/bg-triangle.svg';
import { ReactComponent as Pentagon } from 'Images/bg-pentagon.svg';

const ChoseOption = ({ setOption, isExtended }) => {
  return (
    <GamesOptionsContainer isExtended={isExtended}>
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
      {isExtended ? (
        <>
          <PolishedGameOption
            type="spock"
            onClick={() => {
              setOption('spock');
            }}
          />
          <PolishedGameOption
            type="lizard"
            onClick={() => {
              setOption('lizard');
            }}
          />
        </>
      ) : null}
      {isExtended ? <Pentagon /> : <Triangle />}
    </GamesOptionsContainer>
  );
};

export default ChoseOption;
