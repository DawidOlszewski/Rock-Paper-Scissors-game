import imageRules from 'Images/image-rules.svg';
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
  width: 110px;
  height: 35px;
  background-color: transparent;
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: transform 0.1s ease-in-out;

  :hover {
    transform: scale(1.1);
  }

  @media (min-width: 500px) {
    // position: absolute;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-color: white;

  div {
    background: url(${imageRules}) no-repeat center;
    height: 50%;
    width: 80%;
  }
`;
