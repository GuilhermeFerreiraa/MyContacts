import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import { Container } from './styles';
import Header from '../Header';
import Routes from '../../Routes';
import ToastContainer from '../Toast/ToastContainer';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <ToastContainer />
        <GlobalStyles />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
