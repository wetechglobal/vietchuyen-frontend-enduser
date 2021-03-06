import { useTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import Slider from './components/slider/index';
import LatestNews from './components/latestNew/index';
import Module from './components/module'
import IMAGES from 'assets/images/images';
import PARTNER from 'assets/images/partner-logo/partner'
import CLIENT from 'assets/images/client-logo/client'
import './style.scss';
import Marquee from '../../common/marquee';
const Home = () => {
    const { t } = useTranslation();
    const partner = [
        {src: PARTNER.AMP},
        {src: PARTNER.CISCO},
        {src: PARTNER.DATWYLER},
        {src: PARTNER.DELL},
        {src: PARTNER.FUJITSU},
        {src: PARTNER.HP},
        {src: PARTNER.IBM},
        {src: PARTNER.KRONE},
        {src: PARTNER.LENOVO},
        {src: PARTNER.LG},
        {src: PARTNER.MICROSOFT},
        {src: PARTNER.PANASONIC}
    ]
    const client = [
        {src: CLIENT.ACB},
        {src: CLIENT.BIDV},
        {src: CLIENT.CAVN},
        {src: CLIENT.CATHAYLIFE},
        {src: CLIENT.EROPEAN},
        {src: CLIENT.EVN},
        {src: CLIENT.EXIMBANK},
        {src: CLIENT.FPT},
        {src: CLIENT.IBM},
        {src: CLIENT.METRO},
        {src: CLIENT.VIETSPACE},
        {src: CLIENT.VIETBANK}
    ]
    return (
        <Row>
            <Col className="home">
                <Slider />
                <Row className="latest-news">
                    <Col md={12} className="title">{t('news.latestNews')}</Col>
                    <LatestNews />
                </Row>
                <Module />
                <img className="shakehands" src={IMAGES.DOITAC} width="100%" alt=""/>
                <Marquee title={t('news.partner')} datas={partner} type="picture"/>
                <Marquee title={t('news.client')} datas={client} type="picture"/>
            </Col>
        </Row>
    );
}
export default Home
