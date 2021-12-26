import { Wrapper } from 'Atoms/GameOption/GameOption.style';
import { ReactComponent as Rock } from 'Images/icon-rock.svg';
import { ReactComponent as Paper } from 'Images/icon-paper.svg';
import { ReactComponent as Scissors } from 'Images/icon-scissors.svg';
import theme from 'theme';

const GameOption = ({
  icon,
  backgroundColorTo,
  backgroundColorFrom,
  onClick,
  normal,
}) => {
  return (
    <Wrapper
      normal={normal}
      as="button"
      backgroundColorTo={backgroundColorTo}
      backgroundColorFrom={backgroundColorFrom}
      onClick={onClick}
    >
      {icon}
    </Wrapper>
  );
};

export const PolishedGameOption = ({ type, onClick, normal }) => {
  if (type === 'rock')
    return (
      <GameOption
        normal={normal}
        onClick={onClick}
        icon={<Rock />}
        backgroundColorTo={theme.color.rock.from}
        backgroundColorFrom={theme.color.rock.to}
      />
    );
  if (type === 'paper')
    return (
      <GameOption
        normal={normal}
        onClick={onClick}
        icon={<Paper />}
        backgroundColorTo={theme.color.paper.from}
        backgroundColorFrom={theme.color.paper.to}
      />
    );
  if (type === 'scissors')
    return (
      <GameOption
        normal={normal}
        onClick={onClick}
        icon={<Scissors />}
        backgroundColorTo={theme.color.scissors.from}
        backgroundColorFrom={theme.color.scissors.to}
      />
    );
};

export default GameOption;
