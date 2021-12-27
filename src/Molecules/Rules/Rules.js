import { Wrapper, Container } from 'Molecules/Rules/Rules.style';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const RulesPopUp = ({ setshowRules }) => {
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      setshowRules(false);
    }
  };

  return (
    <Container onClick={handleOutsideClick}>
      <div>
        <h2>Rules</h2>
        <div />
        <button onClick={() => setshowRules(false)}></button>
      </div>
    </Container>
  );
};

const Rules = () => {
  const [showRules, setshowRules] = useState(false);
  return (
    <>
      <Wrapper onClick={() => setshowRules(true)}>Rules</Wrapper>
      {showRules
        ? ReactDOM.createPortal(
            <RulesPopUp setshowRules={setshowRules} />,
            document.getElementById('portal')
          )
        : null}
    </>
  );
};

export default Rules;
