import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  width: 17vh;
  height: 17vh;
  ${({ normal }) => (normal ? 'transform: translate(0%,0%);' : '')}
  border-radius: 50%;

  border: 15px solid transparent;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(
        to bottom,
        ${({ backgroundColorFrom }) => backgroundColorFrom},
        ${({ backgroundColorTo }) => backgroundColorTo}
      )
      border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 10px 0 -3px lightgray,
    0 7px ${({ backgroundColorTo }) => darken(0.2, backgroundColorTo)};
  transform: translate(-50%, 50%);
  ${({ normal }) => (normal ? 'transform: translate(0%,0%);' : '')}
  transform-origin: 0% 100%;

  transition: transform 0.1s ease-in-out;

  svg {
    margin-top: 10px;
  }

  &:hover {
    transform: scale(1.03) translate(-50%, calc(50% - 3px));
    ${({ normal }) =>
      normal ? 'transform: scale(1.03) translateY(-3px);' : ''}
  }
`;
