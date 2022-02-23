import { GlobalStyle } from '../styles/globalStyle';
import { StyledApp } from './styled/App.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <GlobalStyle />
        <div className="App">hello world</div>
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
