
import { Row, Col } from 'react-bootstrap';

const Home = () => {

    return (
        <Row>
            <Col className="home">
                Home Page            
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
    );
}
export default Home
