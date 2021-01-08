import { useTranslation } from 'react-i18next';
import IMAGES from 'assets/images/images';
import { Row, Col } from 'react-bootstrap';
import './style.scss';
import CountUp from '../../countup';

const Strength = () => {

    const { t } = useTranslation();

    return (
        <Row xs={3} className="strength">
            <Col className="left">
                <img className="linedoc" src={IMAGES.LINEDOC} alt="" />
                <div>
                    <h1>{t('strengths.title')}</h1>
                    <span>{t('strengths.titleFirst')}
                        <span>{t('strengths.titleCenter')}</span>
                        {t('strengths.titleLast')}
                    </span>
                </div>
            </Col>
            <Col className="center">
                <img className="linedoc" src={IMAGES.LINEDOC} alt="" />
                <div className="content-num">
                    <div className="main-group">
                        <div className="group">
                            <CountUp point={10}/>
                            <img className="vongtron" src={IMAGES.BGVONGTRON} alt="" />
                        </div>
                        <span>{t('strengths.10')}</span>
                    </div>
                    <div className="main-group padding-bottom">
                        <div className="group">
                            <CountUp point={20}/>
                            <img className="vongtron" src={IMAGES.BGVONGTRON} alt="" />
                        </div>
                        <span>{t('strengths.20')}</span>
                    </div>
                    <div className="main-group">
                        <div className="group">
                            <CountUp point={100}/>
                            <img className="vongtron" src={IMAGES.BGVONGTRON} alt="" />
                        </div>
                        <span>{t('strengths.100')}</span>
                    </div>
                </div>
            </Col>
            <Col className="right">
                <img className="linedoc one" src={IMAGES.LINEDOC} alt="" />
                <div className="content-num">
                    <div className="main-group long">
                        <div className="group">
                            <CountUp point={300}/>
                            <img className="vongtron" src={IMAGES.BGVONGTRON} alt="" />
                        </div>
                        <span>{t('strengths.300')}</span>
                    </div>
                    <div className="main-group padding-bottom">
                        <div className="group">
                            <CountUp point={63}/>
                            <img className="vongtron" src={IMAGES.BGVONGTRON} alt="" />
                        </div>
                        <span>{t('strengths.63')}</span>
                    </div>
                    <div className="main-group long">
                        <div className="group">
                            <CountUp point={6}/>
                            <img className="vongtron" src={IMAGES.BGVONGTRON} alt="" />
                        </div>
                        <span>{t('strengths.6')}</span>
                    </div>
                </div>
                <img className="linedoc two" src={IMAGES.LINEDOC} alt="" />
            </Col>
        </Row>
    )
}
export default Strength;