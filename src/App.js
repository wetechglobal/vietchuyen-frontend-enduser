import { Container } from 'react-bootstrap';
import TheHeader from './containers/header';
import TheFooter from './containers/footer';
import TheContent from 'containers/content';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container fluid>
        <TheHeader />
        <TheContent />
        <TheFooter />
      </Container>
    </Router>
  );
}

export default App;
