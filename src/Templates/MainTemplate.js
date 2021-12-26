import styled from 'styled-components';
import Label from 'Molecules/Label/Label';
import Rules from 'Molecules/Rules/Rules';

const Container = styled.div`
  display: flex;
  flex-flow: column;

  align-items: center;
  height: 100%;
`;

const MainTemplate = ({ children }) => {
  return (
    <Container>
      <Label></Label>

      {children}

      <Rules />
    </Container>
  );
};

export default MainTemplate;
