import theme from 'theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'GlobalStyles';
import BasicGame from 'Pages/BasicGame';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BasicGame isExtended={true} />
    </ThemeProvider>
  );
}

export default App;
