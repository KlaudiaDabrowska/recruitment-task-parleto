// import Template from 'components/common/Template';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from '../../assets/styles/App.styles';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { MainView } from 'pages/mainView/MainView';
// import { AddWorkersForm } from 'pages/addWorkers/AddWorkersForm';
import { Header } from 'assets/styles/Header.styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header> Manage Workers</Header>
        <MainView />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
