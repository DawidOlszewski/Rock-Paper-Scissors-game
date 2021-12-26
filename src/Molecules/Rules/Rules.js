import { Wrapper, Container } from 'Molecules/Rules/Rules.style';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const RulesPopUp = ({ setshowRules }) => {
  console.log(setshowRules);
  return (
    <Container>
      <h2>Rules</h2>
      <div />
      <button onClick={() => setshowRules(false)}>X</button>
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
