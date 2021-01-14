/* eslint-disable jsx-a11y/anchor-has-content */
import { Container, Row, Figure } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import IMAGES from 'assets/images/images';
import ICONS from 'assets/icons/icons';

const TheFooter = () => {
    const { t } = useTranslation();
    const ScrollToTop = (e) => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
    };

    return (
        <footer className="footer">
            <Figure className="main-footer">
                <Figure.Image
                    src={IMAGES.BG}
                    width="100%"
                />
                <Container>
                    <Row>
                        <img src={ICONS.LOGO} alt="" />
                    </Row>
                    <Row>
                        <h4>{t('footer.companyName')}</h4>
                    </Row>
                    <Row>
                        <div className="img"><img src={ICONS.TRUSO} alt="" /></div>
                        <div>
                            <span className='companyInfo'>{t('footer.addr')}</span><br />
                            {t('footer.address')}
                        </div>
                    </Row>
                    <Row>
                        <div className="inrow">
                            <div className="img"><img src={ICONS.DIENTHOAI} alt="" /></div>
                            <div>
                                <span className='companyInfo'>{t('footer.phone')}</span><br />
                                (028) 3963 7678
                            </div>
                        </div>
                        <div className="inrow">
                            <div className="img"><img src={ICONS.FAX} alt="" /></div>
                            <div>
                                <span className='companyInfo'>FAX</span><br />
                                (028) 3963 7679
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className="img"><img src={ICONS.GPKD} alt="" /></div>
                        <div>
                            <span className='companyInfo'>{t('footer.gpkd')}</span><br />
                            {t('footer.gpkdDetail')}
                        </div>
                    </Row>
                    <Row>
                        <div className="img"><img src={ICONS.MST} alt="" /></div>
                        <div>
                            <span className='companyInfo'>{t('footer.mst')}</span><br />
                            0304198513
                    </div>
                    </Row>
                    <Row className="copyright">
                        <span className='companyInfo'>Copyright @ 2020 | vietchuyen.com</span>
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
            <img className="srolltop" src={ICONS.TOP} alt="" onClick={ScrollToTop}/>
        </footer>
    );
}
export default TheFooter
