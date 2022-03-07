import { GlobalStyle } from '../styles/globalStyle';
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { StyledApp } from './styled/App.styled';
import { AppRoutes } from '../routes/Routes';
import { Sidebar } from './Sidebar';
import { Main } from './Main';
import { getData } from '../services/manageAPI';

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
        <BrowserRouter>
          <Sidebar />
          <Main>
            <AppRoutes />
          </Main>
        </BrowserRouter>
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
