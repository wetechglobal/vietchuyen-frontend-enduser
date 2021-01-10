import { Container, Row, Figure } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import IMAGES from 'assets/images/images';

const TheFooter = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <Figure className="main-footer">
                <Figure.Image
                    src={IMAGES.BG}
                    width="100%"
                />
                <Container>
                    <Row>
                        <img src={IMAGES.LOGO} alt="" />
                    </Row>
                    <Row>
                        <h4>{t('footer.companyName')}</h4>
                    </Row>
                    <Row>
                        <div className="img"><img src={IMAGES.TRUSO} alt="" /></div>
                        <div>
                            <span>{t('footer.addr')}</span><br />
                            {t('footer.address')}
                        </div>
                    </Row>
                    <Row>
                        <div className="inrow">
                            <div className="img"><img src={IMAGES.DIENTHOAI} alt="" /></div>
                            <div>
                                <span>{t('footer.phone')}</span><br />
                                (028) 39637678
                            </div>
                        </div>
                        <div className="inrow">
                            <div className="img"><img src={IMAGES.FAX} alt="" /></div>
                            <div>
                                <span>FAX</span><br />
                                (028) 39637679
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className="img"><img src={IMAGES.GPKD} alt="" /></div>
                        <div>
                            <span>{t('footer.gpkd')}</span><br />
                            {t('footer.gpkdDetail')}
                        </div>
                    </Row>
                    <Row>
                        <div className="img"><img src={IMAGES.MST} alt="" /></div>
                        <div>
                            <span>{t('footer.mst')}</span><br />
                            0304198513
                    </div>
                    </Row>
                    <Row className="copyright">
                        <span>Copyright @ 2020 | vietchuyen.com</span>
                    </Row>
                    <Row>
                        <div className="group">
                            <a className="face" href="https://www.facebook.com/"></a>
                            <a className="youtube" href="https://www.youtube.com/"></a>
                            <a className="in" href="https://www.linkedin.com/"></a>
                        </div>
                    </Row>
                </Container>
            </Figure>

            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.23696364562!2d106.62428871406844!3d10.793154492310165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c007f436d81%3A0x4b4529747ba52d36!2zQ2h1bmcgQ8awIMSQ4buZYyBM4bqtcCBC!5e0!3m2!1svi!2s!4v1610253207388!5m2!1svi!2s"
                frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" title="map"></iframe>
        </footer>
    );
}
export default TheFooter
