import options from 'Helpers/Options';
import Result from 'Molecules/Result/Result';
import { Container } from 'Organizms/ResultBoard/ResultBoard.style';
import { PolishedGameOption } from 'Atoms/GameOption/GameOption';

const ResultBoard = ({ chosenOption, randomOption, result, reset }) => (
  <>
    <Container>
      <div>
        <PolishedGameOption normal type={chosenOption} />
        <p>You Picked</p>
      </div>
      <div>
        <PolishedGameOption normal type={options[randomOption]} />
        <p>The house picked</p>
      </div>
    </Container>
    <Result result={result} onClick={reset} />
  </>
);

export default ResultBoard;
