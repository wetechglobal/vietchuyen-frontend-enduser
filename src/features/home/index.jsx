
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import Slider from './components/slider/index';
import LatestNews from './components/latestNew/index';
import './style.scss';
const Home = () => {
    const { t } = useTranslation();
    return (
        <Row>
            <Col className="home">
                <Slider />
                <Row className="latest-news">
                    <Col md={12} className="title">{t('news.latestNews')}</Col>
                    <LatestNews />
                </Row>
            </Col>
        </Row>
    );
}
export default Home
