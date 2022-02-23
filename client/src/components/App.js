import { GlobalStyle } from '../styles/globalStyle';
import { StyledApp } from './styled/App.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { getData } from '../services/manageAPI';
import { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(async () => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };
    fetchData();
  }, []);

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
