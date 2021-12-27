import { Wrapper, Container, RulesImg } from 'Molecules/Rules/Rules.style';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const RulesPopUp = ({ setshowRules, isExtended }) => {
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      setshowRules(false);
    }
  };
  return (
    <Container onClick={handleOutsideClick} isExtended={isExtended}>
      <div>
        <h2>Rules</h2>
        {/* <div /> */}
        <RulesImg isExtended={isExtended} />
        <button onClick={() => setshowRules(false)}></button>
      </div>
    </Container>
  );
};

const Rules = ({ isExtended }) => {
  const [showRules, setshowRules] = useState(false);
  return (
    <>
      <Wrapper onClick={() => setshowRules(true)}>Rules</Wrapper>
      {showRules
        ? ReactDOM.createPortal(
            <RulesPopUp setshowRules={setshowRules} isExtended={isExtended} />,
            document.getElementById('portal')
          )
        : null}
    </>
  );
};

export default Rules;
