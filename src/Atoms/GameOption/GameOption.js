import { Wrapper } from 'Atoms/GameOption/GameOption.style';

const GameOption = ({ icon, backgroundColorTo, backgroundColorFrom }) => {
  return (
    <Wrapper
      backgroundColorTo={backgroundColorTo}
      backgroundColorFrom={backgroundColorFrom}
    >
      {icon}
    </Wrapper>
  );
};

export default GameOption;
