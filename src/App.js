import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col className="header">
          HEADER - NAVI
        </Col>
      </Row>
      <Row>
        <Col>
          <Row className="slider">
            <Col md={12}>SLIDER</Col>
            <Col md={12}>SLIDER</Col>
            <Col md={12}>SLIDER</Col>
            <Col md={12}>SLIDER</Col>
          </Row>
          <Row className="latest-new">
            <Col md={4}>TIN TUC</Col>
            <Col md={4}>TIN TUC</Col>
            <Col md={4}>TIN TUC</Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="footer">
          FOOTER
        </Col>
      </Row>

    </Container>
  );
}

export default App;
