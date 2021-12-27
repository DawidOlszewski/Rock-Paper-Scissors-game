import { Container } from 'Molecules/Result/Result.style';

const Result = ({ result, onClick }) => {
  return (
    <Container>
      <h2>
        {result === 'win' ? 'You Win' : result === 'lose' ? 'You Lose' : 'Draw'}
      </h2>
      <button onClick={onClick}>Play Again</button>
    </Container>
  );
};

export default Result;
