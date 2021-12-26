import MainTemplate from 'Templates/MainTemplate';
import ChoseOption from 'Organizms/ChoseOption/ChoseOption';
import { PolishedGameOption } from 'Atoms/GameOption/GameOption';

import useOption from 'Helpers/ChosenOption';
import styled from 'styled-components';
import Result from 'Molecules/Result/Result';

const Container = styled.div`
  margin: 60px 0 40px 0;
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  p {
    margin-top: 30px;
    text-transform: uppercase;
    color: white;
  }
`;

const BasicGame = () => {
  const [setOption, isChosen, reset, chosenOption] = useOption();
  return (
    <MainTemplate>
      {isChosen ? (
        <>
          <Container>
            <div>
              <PolishedGameOption normal type={chosenOption} />
              <p>You Picked</p>
            </div>
            <div>
              <PolishedGameOption normal type="scissors" />
              <p>The house picked</p>
            </div>
          </Container>
          <Result onClick={reset} />
        </>
      ) : (
        <ChoseOption setOption={setOption} />
      )}
    </MainTemplate>
  );
};
export default BasicGame;
