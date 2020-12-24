
import { Row, Col } from 'react-bootstrap';
import Slider from './components/slider/index';
import LatestNews from './components/latestNew/index';
import './style.scss';
const Home = () => {

    return (
        <Row>
            <Col className="home">
                <Slider />
                <Row className="latest-new">
                    <Col md={12} className="title">TIN TỨC MỚI NHẤT</Col>
                    <LatestNews />
                </Row>
            </Col>
        </Row>
    );
}
export default Home
