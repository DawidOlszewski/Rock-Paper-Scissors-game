import { Container } from 'Molecules/Result/Result.style';

const Result = ({ Win, onClick }) => {
  return (
    <Container>
      <h2>{Win === true ? 'You Win' : 'You Lose'}</h2>
      <button onClick={onClick}>Play Again</button>
    </Container>
  );
};

export default Result;
