import IMAGES from 'assets/images/images';
import { Container, Figure, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Solution from '../../../../common/solution/index';
import Strength from './strength/index';
import parse from 'html-react-parser';
import ThreeVerticalLine from '../../../../common/verticalLine/index'
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
                <div className="xemthem">
                    <ThreeVerticalLine borderLeft="5px solid #0063B0" />
                    <a href="/news">{parse(t('strengths.news'))}</a>
                    <ThreeVerticalLine borderLeft="5px solid #0063B0" />
                </div>
                <Container>
                    <Strength />
                    <Row className="giaiphap">
                        <Solution backgroundcolor='white' diamondtitle={t('diamond.product')} diamondresearch={t('diamond.research')} />
                    </Row>
                </Container>
            </Figure>
        </div>
    )
}
export default Module;