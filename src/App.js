import theme from 'theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'GlobalStyles';
import BasicGame from 'Pages/BasicGame';
import react, { useState } from 'react';

export const GameContext = react.createContext({
  isExtended: false,
  setExtended: () => {},
});

function App() {
  const [isExtended, setExtended] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GameContext.Provider value={{ isExtended, setExtended }}>
        <BasicGame />
      </GameContext.Provider>
    </ThemeProvider>
  );
}

export default App;
