
import { Row, Col } from 'react-bootstrap';
import NewsImage from './components/newsImage/';
import NewsInfo from './components/newsInfo';
import './style.scss';

const News = () => {

    return (
        <Row>
            <Col className="news">
                <NewsImage />
                <Row className="news-info">
                    <NewsInfo />
                </Row>
            </Col>
        </Row>
    );
}
export default News
