import styled from 'styled-components';

export const GamesOptionsContainer = styled.div`
  position: relative;
  height: 10%;
  aspect-ratio: 1/1;
  margin: auto 0;
  button {
    position: absolute;
  }

  button:nth-of-type(1) {
    left: 0;
    bottom: 100%;
    ${({ isExtended }) => (isExtended ? 'left: 50%;bottom: 100%;' : '')}
  }
  button:nth-of-type(2) {
    left: 100%;
    bottom: 100%;
    ${({ isExtended }) => (isExtended ? 'left: 100%; bottom: 62%;' : '')}
  }
  button:nth-of-type(3) {
    left: 50%;
    bottom: 14%;
    ${({ isExtended }) => (isExtended ? 'left: 82%; bottom: 0%;' : '')}
  }
  button:nth-of-type(4) {
    left: 50%;
    bottom: 50%;
    ${({ isExtended }) => (isExtended ? 'left: 18%;bottom: 0%;' : '')}
  }
  button:nth-of-type(5) {
    left: 10%;
    bottom: 14%;
    ${({ isExtended }) => (isExtended ? 'left: 0%; bottom: 62%;' : '')}
  }

  & > svg {
    width: 100%;
    height: 100%;

    path: {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 400px) {
    height: 30%;
  }
  @media (min-width: 500px) {
    height: 34%;
  }
`;
