import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 30px;
  width: 80%;
  max-width: 600px;
  height: 100px;
  border-radius: ${({ theme }) => theme.borderRadius.m};
  border: ${({ theme }) => theme.color.fadeWhite} solid 3px;
  color: white;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  padding: 25px;
  h1 {
    font-size: ${({ isExtended }) => (isExtended ? '13px' : ' 23px')};
    line-height: 0.82em;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

const ScoreContainer = styled.div`
  width: 90px;
  height: calc(100% - 2 * 7px);
  margin-right: 7px;
  border-radius: ${({ theme }) => theme.borderRadius.m};
  background-color: white;
  padding: 10px;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  h2 {
    color: ${({ theme }) => theme.color.text.score};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 12px;
  }

  p {
    color: ${({ theme }) => theme.color.text.dark};
    font-size: 50px;
    font-weight: bold;
    line-height: 40px;
    margin: auto 0;
  }
`;

export const Score = ({ score }) => {
  return (
    <ScoreContainer>
      <h2>Score</h2>
      <p>{score}</p>
    </ScoreContainer>
  );
};
