import { Wrapper } from 'Atoms/GameOption/GameOption.style';
import { ReactComponent as Rock } from 'Images/icon-rock.svg';
import { ReactComponent as Paper } from 'Images/icon-paper.svg';
import { ReactComponent as Scissors } from 'Images/icon-scissors.svg';
import { ReactComponent as Spock } from 'Images/icon-spock.svg';
import { ReactComponent as Lizard } from 'Images/icon-lizard.svg';
import theme from 'theme';
import { GameContext } from 'App';
import { useContext } from 'react';

const GameOption = ({
  icon,
  backgroundColorTo,
  backgroundColorFrom,
  onClick,
  normal,
}) => {
  const { isExtended } = useContext(GameContext);
  return (
    <Wrapper
      isExtended={isExtended}
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

export const PolishedGameOption = ({ type, onClick, normal, isExtended }) => {
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
  if (type === 'spock')
    return (
      <GameOption
        normal={normal}
        onClick={onClick}
        icon={<Spock />}
        backgroundColorTo={theme.color.spock.from}
        backgroundColorFrom={theme.color.spock.to}
      />
    );
  if (type === 'lizard')
    return (
      <GameOption
        normal={normal}
        onClick={onClick}
        icon={<Lizard />}
        backgroundColorTo={theme.color.lizard.from}
        backgroundColorFrom={theme.color.lizard.to}
      />
    );
};

export default GameOption;
