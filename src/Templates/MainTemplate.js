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

const MainTemplate = ({ children, score }) => {
  return (
    <Container>
      <Label score={score}></Label>

      {children}
      <Rules />
    </Container>
  );
};

export default MainTemplate;
