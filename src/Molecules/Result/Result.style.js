import styled from 'styled-components';

export const Container = styled.div`
  margin: auto 0;
  h2 {
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    color: white;
  }

  button {
    width: 200px;
    height: 60px;
    border-radius: ${({ theme }) => theme.borderRadius.m};
    border: none;
    color: ${({ theme }) => theme.color.background.from};
    font-size: 25px;
    text-transform: uppercase;
    transition: transform 0.1s ease-in-out;

    &:hover {
      transform: scale(1.03) translateY(-3px);
    }
  }
`;
