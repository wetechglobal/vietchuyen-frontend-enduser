import React, { Suspense } from 'react';
import { Container } from 'react-bootstrap';
import TheHeader from './containers/header';
import TheFooter from './containers/footer';
import TheContent from 'containers/content';
import Loader from 'common/i18n/loader';
import { BrowserRouter as Router } from "react-router-dom";
import { withRouter } from 'react-router';


function App() {
  const HeaderWithRouter = withRouter(TheHeader);
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Container fluid>
          <HeaderWithRouter />
          <TheContent />
          <TheFooter />
        </Container>
      </Router>
    </Suspense>
  );
}

export default App;
