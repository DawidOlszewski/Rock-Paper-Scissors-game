import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 30px;
  width: 80%;
  height: 100px;
  border-radius: ${({ theme }) => theme.borderRadius.m};
  border: white solid 1px;
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
  height: 80px;
  margin-right: 15px;
  border-radius: ${({ theme }) => theme.borderRadius.m};
  background-color: white;
  padding: 10px;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  h2 {
    text-transform: uppercase;
    color: blue;
    letter-spacing: 2px;
    font-size: 12px;
  }

  p {
    color: gray;
    font-size: 50px;
    line-height: 45px;
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
