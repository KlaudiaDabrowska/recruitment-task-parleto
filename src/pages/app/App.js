import Template from 'components/common/Template';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from '../../assets/styles/App.styles';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { WorkersListView } from 'pages/mainView/WorkersListView';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Template>
          <Wrapper>
            <Routes>
              {/* <Route path="/salary-per-department" />
            <Route path="/add-worker" /> */}
              <Route path="/" element={<WorkersListView />} />
            </Routes>
          </Wrapper>
        </Template>
      </ThemeProvider>
    </Router>
  );
}

export default App;
