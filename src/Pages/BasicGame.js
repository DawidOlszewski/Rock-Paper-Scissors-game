import MainTemplate from 'Templates/MainTemplate';
import GameOption from 'Atoms/GameOption/GameOption';
import { ReactComponent as Rock } from 'Images/icon-rock.svg';
import { ReactComponent as Paper } from 'Images/icon-paper.svg';
import { ReactComponent as Scissors } from 'Images/icon-scissors.svg';
import theme from 'theme';

import styled from 'styled-components';

const GamesOptionsContainer = styled.div`
  position: relative;
  height: 30%;
  aspect-ratio: 1/1;
  margin: auto 0;
  div {
    position: absolute;
  }

  div:nth-of-type(1) {
    bottom: 0;
    left: 0;
  }
  div:nth-of-type(2) {
    left: 100%;
    bottom: 0;
  }
  div:nth-of-type(3) {
    left: 50%;
    bottom: 86%;
  }
`;

const BasicGame = () => {
  return (
    <MainTemplate>
      <GamesOptionsContainer>
        <GameOption
          icon={<Rock />}
          backgroundColorTo={theme.color.rock.from}
          backgroundColorFrom={theme.color.rock.to}
        />
        <GameOption
          icon={<Paper />}
          backgroundColorTo={theme.color.paper.from}
          backgroundColorFrom={theme.color.paper.to}
        />
        <GameOption
          icon={<Scissors />}
          backgroundColorTo={theme.color.scissors.from}
          backgroundColorFrom={theme.color.scissors.to}
        />
      </GamesOptionsContainer>
    </MainTemplate>
  );
};
export default BasicGame;
