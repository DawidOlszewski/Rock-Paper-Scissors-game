import theme from 'theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>abcd</div>
    </ThemeProvider>
  );
}

export default App;
