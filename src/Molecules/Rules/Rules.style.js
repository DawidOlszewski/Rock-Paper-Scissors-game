import styled from 'styled-components';
export const Wrapper = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius.m};
  margin-bottom: 40px;
  margin-top: auto;
  border: white solid 1px;
  color: white;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 30px;
  background-color: transparent;
  text-transform: uppercase;
  transition: transform 0.1s ease-in-out;

  :hover {
    transform: scale(1.1);
  }

  @media (min-width: 500px) {
    // position: absolute;
  }
`;
