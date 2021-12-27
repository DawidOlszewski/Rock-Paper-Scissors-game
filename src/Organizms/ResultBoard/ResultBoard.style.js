import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;
  display: flex;
  width: 80%;
  max-width: 600px;
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
