import { Wrapper, Title, Score } from './Label.style';

const Label = ({ isExtended, score }) => {
  return (
    <Wrapper>
      <Title isExtended={isExtended}>
        <h1>Rock</h1>
        <h1>Paper</h1>
        <h1>Scissors</h1>
        {isExtended ? (
          <>
            <h1>Lizard</h1>
            <h1>Spock</h1>
          </>
        ) : null}
      </Title>
      <Score score={score} />
    </Wrapper>
  );
};
export default Label;
