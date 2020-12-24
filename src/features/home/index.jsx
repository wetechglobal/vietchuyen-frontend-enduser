
import { Row, Col } from 'react-bootstrap';
import Slider from './components/slider/index';
import LatestNews from './components/latestNew/index';
import './style.scss';
const Home = () => {

    return (
        <Row>
            <Col className="home">
                <Row className="slider">
                    <div className="line">
                        <div className="line-bg"></div>
                    </div>
                    <Slider />
                </Row>
                <Row className="latest-new">
                    <Col md={12} className="title">TIN TỨC MỚI NHẤT</Col>
                    <LatestNews />
                </Row>
            </Col>
        </Row>
    );
}
export default Home
