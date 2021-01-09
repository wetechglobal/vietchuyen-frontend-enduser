import IMAGES from 'assets/images/images';
import { Container, Figure, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Module = () => {
    const { t } = useTranslation();

    return (
        <div className="strength">
            <Figure className="main-strength">
                <Figure.Image
                    src={IMAGES.BGMODULE}
                    width="100%"
                />
                <Container>
                    <Row xs={1} md={2} lg={3}>
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
                                        <img className="num" src={IMAGES.TEN} alt="" />
                                        <img className="vongtron" src={IMAGES.BGVONGTRON} alt="" />
                                    </div>
                                    <span>{t('strengths.10')}</span>
                                </div>
                                <div className="main-group padding-bottom">
                                    <div className="group">
                                        <img className="num" src={IMAGES.TWENTY} alt="" />
                                        <img className="vongtron" src={IMAGES.BGVONGTRON} alt="" />
                                    </div>
                                    <span>{t('strengths.20')}</span>
                                </div>
                                <div className="main-group">
                                    <div className="group">
                                        <img className="num" src={IMAGES.ONEDUNDRED} alt="" />
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
                                        <img className="num" src={IMAGES.THREEHUNDRED} alt="" />
                                        <img className="vongtron" src={IMAGES.BGVONGTRON} alt="" />
                                    </div>
                                    <span>{t('strengths.300')}</span>
                                </div>
                                <div className="main-group padding-bottom">
                                    <div className="group">
                                        <img className="num" src={IMAGES.SIXTYTHREE} alt="" />
                                        <img className="vongtron" src={IMAGES.BGVONGTRON} alt="" />
                                    </div>
                                    <span>{t('strengths.63')}</span>
                                </div>
                                <div className="main-group long">
                                    <div className="group">
                                        <img className="num" src={IMAGES.SIX} alt="" />
                                        <img className="vongtron" src={IMAGES.BGVONGTRON} alt="" />
                                    </div>
                                    <span>{t('strengths.6')}</span>
                                </div>
                            </div>
                            <img className="linedoc two" src={IMAGES.LINEDOC} alt="" />
                        </Col>
                    </Row>
                    <Row className="giaiphap">
                        <Col>
                            <Row>
                                <h1>GIẢI PHÁP - SẢN PHẨM</h1>
                            </Row>
                            <Row>
                                <h4>TÌM HIỂU</h4>
                            </Row>
                            <Row className="diamond-group">
                                <div className="item-sreen">
                                    <div>
                                        <img src={IMAGES.TWENTY} alt=""/>
                                        <span>Hệ thống màn hình ghép</span>
                                    </div>
                                </div>
                                <div className="item-meet">meet</div>
                                <div className="item-camera">camera</div>
                                <div className="item-power">power</div>
                                <div className="item-vetinh">vetinh</div>
                                <div className="item-net">net</div>
                                <div className="item-fire">fire</div>
                                <div className="item-print">print</div>
                                <div className="item-cam">cam</div>
                                <div className="item-set">set</div>
                                <div className="item-ups">ups</div>
                                <div className="item-me">me</div>
                                <div className="item-pac">pac</div>
                                <div className="item-bts">bts</div>
                                <div className="item-atm">atm</div>
                                <div className="item-struc">struc</div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Figure>
        </div>
    )
}
export default Module;