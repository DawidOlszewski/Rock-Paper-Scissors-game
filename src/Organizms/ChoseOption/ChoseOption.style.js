import styled from 'styled-components';

export const GamesOptionsContainer = styled.div`
  position: relative;
  height: 30%;
  aspect-ratio: 1/1;
  margin: auto 0;
  button {
    position: absolute;
  }

  button:nth-of-type(1) {
    bottom: 100%;
    left: 0;
  }
  button:nth-of-type(2) {
    left: 100%;
    bottom: 100%;
  }
  button:nth-of-type(3) {
    left: 50%;
    bottom: 14%;
  }

  & > svg {
    width: 100%;
    height: 100%;

    path: {
      width: 100%;
      height: 100%;
    }
  }
`;
