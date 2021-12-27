import styled from 'styled-components';
import Label from 'Molecules/Label/Label';
import Rules from 'Molecules/Rules/Rules';
import React from 'react';

const Container = styled.div`
  display: flex;
  flex-flow: column;

  align-items: center;
  height: 100%;
`;

const MainTemplate = ({ children, score, isExtended }) => {
  return (
    <Container>
      <Label score={score} isExtended={isExtended}></Label>

      {children}
      <Rules isExtended={isExtended} />
    </Container>
  );
};

export default MainTemplate;
