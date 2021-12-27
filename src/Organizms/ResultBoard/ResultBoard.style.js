import styled from 'styled-components';

export const Container = styled.div`
  margin: 60px 0 40px 0;
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
