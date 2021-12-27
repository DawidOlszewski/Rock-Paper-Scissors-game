import imageRules from 'Images/image-rules.svg';
import imageRulesExtended from 'Images/image-rules-bonus.svg';

import exitBtn from 'Images/icon-close.svg';
import styled from 'styled-components';
export const Wrapper = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius.m};
  margin-bottom: 40px;
  margin-top: 40px;
  border: white solid 1px;
  color: white;
  display: flex;
  cursor: pointer;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 35px;
  background-color: transparent;
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: transform 0.1s ease-in-out;

  :hover,
  :focus {
    transform: scale(1.1);
  }

  @media (min-width: ${({ theme }) => theme.media.main1}) {
    margin: 0;
    position: absolute;
    bottom: 20px;
    right: 20px;
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
  justify-content: space-evenly;
  background-color: white;

  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-evenly;
    background-color: white;
  }

  div > div {
    background: url(${({ isExtended }) =>
        isExtended ? imageRulesExtended : imageRules})
      no-repeat center;
    background-size: cover;
    height: 50%;
    width: 80%;
  }

  button {
    border: none;
    mask: url(${exitBtn});
    mask-size: cover;
    background-color: black;
    width: 23px;
    height: 23px;
    opacity: 0.25;
    transition: opacity 0.1s ease-in-out;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }

  h2 {
    color: ${({ theme }) => theme.color.text.dark};
    text-transform: uppercase;
  }

  @media (min-width: ${({ theme }) => theme.media.main1}) {
    background: rgba(0, 0, 0, 0.5);

    & > div {
      position: relative;
      border-radius: 10px;
      width: 60%;
      max-width: 400px;
      height: 50%;
    }
    div > div {
      margin-top: 30px;
      height: 79%;
      width: 81%;
    }

    h2 {
      position: absolute;
      top: 15px;
      left: 15px;
    }

    button {
      position: absolute;
      top: 15px;
      right: 15px;
    }
  }
`;
