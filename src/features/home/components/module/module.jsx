import IMAGES from 'assets/images/images';
import ICONS from 'assets/icons/icons';
import { Container, Figure, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
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
                                <OverlayTrigger className="tooltip" key="top" placement="top"
                                    overlay={
                                        <div style={{
                                            backgroundColor: 'white',
                                            padding: '20px 20px',
                                            color: 'black',
                                            borderRadius: 5,
                                            minWidth: 400
                                          }}>
                                              <h2 style={{color: '#0063B0', fontWeight: 'bold'}}>test</h2>
                                            <span>Hệ thống màn hình ghép</span>
                                        </div>
                                    }>
                                    <div className="item-sreen">
                                        <div className="content">
                                            <img src={ICONS.SREEN} alt="" />
                                            <span>Hệ thống màn hình ghép</span>
                                        </div>
                                    </div>
                                </OverlayTrigger>
                                <div className="item-meet">
                                    <div className="content">
                                        <img src={ICONS.MEET} alt="" />
                                        <span>Hệ thống màn hình ghép</span>
                                    </div>
                                </div>
                                <div className="item-camera">
                                    <div className="content">
                                        <img src={ICONS.CAMERA} alt="" />
                                        <span>Hệ thống màn hình ghép</span>
                                    </div>
                                </div>
                                <div className="item-power">
                                    <div className="content">
                                        <img src={ICONS.POWER} alt="" />
                                        <span>Hệ thống màn hình ghép</span>
                                    </div>
                                </div>
                                <div className="item-vetinh">
                                    <div className="content">
                                        <img src={ICONS.VETINH} alt="" />
                                        <span>Hệ thống màn hình ghép</span>
                                    </div>
                                </div>
                                <div className="item-net">
                                    <div className="content">
                                        <img src={ICONS.NET} alt="" />
                                        <span>Hệ thống màn hình ghép</span>
                                    </div>
                                </div>
                                <div className="item-fire">
                                    <div className="content">
                                        <img src={ICONS.FIRE} alt="" />
                                        <span>Hệ thống màn hình ghép</span>
                                    </div>
                                </div>
                                <div className="item-print">
                                    <div className="content">
                                        <img src={ICONS.PRINT} alt="" />
                                        <span>Hệ thống màn hình ghép</span>
                                    </div>
                                </div>
                                <div className="item-cam">
                                    <div className="content">
                                        <img src={ICONS.CAM} alt="" />
                                        <span>Hệ thống màn hình ghép</span>
                                    </div>
                                </div>
                                <div className="item-set">
                                    <div className="content">
                                        <img src={ICONS.SET} alt="" />
                                        <span>Hệ thống màn hình ghép</span>
                                    </div>
                                </div>
                                <div className="item-ups">
                                    <div className="content">
                                        <img src={ICONS.UPS} alt="" />
                                        <span>Hệ thống màn hình ghép</span>
                                    </div>
                                </div>
                                <div className="item-me">
                                    <div className="content">
                                        <img src={ICONS.ME} alt="" />
                                        <span>Hệ thống màn hình ghép</span>
                                    </div>
                                </div>
                                <div className="item-pac">
                                    <div className="content">
                                        <img src={ICONS.PAC} alt="" />
                                        <span>Hệ thống màn hình ghép</span>
                                    </div>
                                </div>
                                <div className="item-bts">
                                    <div className="content">
                                        <img src={ICONS.BTS} alt="" />
                                        <span>Hệ thống màn hình ghép</span>
                                    </div>
                                </div>
                                <div className="item-atm">
                                    <div className="content">
                                        <img src={ICONS.ATM} alt="" />
                                        <span>Hệ thống màn hình ghép</span>
                                    </div>
                                </div>
                                <div className="item-struc">
                                    <div className="content">
                                        <img src={ICONS.STRUC} alt="" />
                                        <span>Hệ thống màn hình ghép</span>
                                    </div>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Figure>
        </div>
    )
}
export default Module;