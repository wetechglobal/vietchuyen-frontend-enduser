import IMAGES from 'assets/images/images';
import { Container, Figure, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Solution from './solution/index';
import Strength from './strength/index';
import './style.scss';

const Module = () => {
    const { t } = useTranslation();
 
    return (
        <div className="module">
            <Figure className="main-module">
                <Figure.Image
                    src={IMAGES.BGMODULE}
                    width="100%"
                />
                <Container>
                    <Strength/>
                    <Row className="giaiphap">
                        <Solution/>
                    </Row>
                </Container>
            </Figure>
        </div>
    )
}
export default Module;