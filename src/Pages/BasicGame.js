import MainTemplate from 'Templates/MainTemplate';
import ChoseOption from 'Organizms/ChoseOption/ChoseOption';
import { PolishedGameOption } from 'Atoms/GameOption/GameOption';

import useOption from 'Helpers/ChosenOption';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
`;

const BasicGame = () => {
  const [setOption, isChosen, reset, chosenOption] = useOption();
  return (
    <MainTemplate>
      {isChosen ? (
        <>
          <button onClick={reset}>1234 </button>
          <Container>
            <PolishedGameOption normal type={chosenOption} />
            <PolishedGameOption normal type="scissors" />
          </Container>
        </>
      ) : (
        <ChoseOption setOption={setOption} />
      )}
    </MainTemplate>
  );
};
export default BasicGame;
