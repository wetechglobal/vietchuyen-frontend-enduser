import { Container } from 'react-bootstrap';
import TheHeader from './containers/header';
import TheFooter from './containers/footer';
import TheContent from 'containers/content';
import { BrowserRouter as Router } from "react-router-dom";
import { withRouter } from 'react-router';

function App() {
  const HeaderWithRouter = withRouter(TheHeader);
  return (
    <Router>
      <Container fluid>
        <HeaderWithRouter />
        <TheContent />
        <TheFooter />
      </Container>
    </Router>
  );
}

export default App;
