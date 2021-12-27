import { Wrapper, Container, RulesImg } from 'Molecules/Rules/Rules.style';
import ReactDOM from 'react-dom';
import { useState, useContext } from 'react';
import { GameContext } from 'App';

const RulesPopUp = ({ setshowRules }) => {
  const { isExtended } = useContext(GameContext);
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      setshowRules(false);
    }
  };
  return ReactDOM.createPortal(
    <Container onClick={handleOutsideClick} isExtended={isExtended}>
      <div>
        <h2>Rules</h2>
        {/* <div /> */}
        <RulesImg isExtended={isExtended} />
        <button onClick={() => setshowRules(false)}></button>
      </div>
    </Container>,
    document.getElementById('portal')
  );
};

const Rules = () => {
  const [showRules, setshowRules] = useState(false);
  return (
    <>
      <Wrapper onClick={() => setshowRules(true)}>Rules</Wrapper>
      {showRules ? <RulesPopUp setshowRules={setshowRules} /> : null}
    </>
  );
};

export default Rules;
