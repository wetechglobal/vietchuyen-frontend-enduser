import { Container, Row, Figure } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import bg from 'assets/images/BG_footer.png';
import logo from 'assets/icons/logoamban.svg';

import truso from 'assets/icons/truso.svg';
import dienthoai from 'assets/icons/dienthoai.svg';
import fax from 'assets/icons/FAX.svg';
import giayphepkinhdoanh from 'assets/icons/giayphepkinhdoanh.svg';
import masothue from 'assets/icons/masothue.svg';

import facebook from 'assets/icons/facebook.svg';
import youtube from 'assets/icons/youtube.svg';
import inI from 'assets/icons/in.svg';


const TheFooter = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <Figure className="main-footer">
                <Figure.Image
                    src={bg}
                    width="100%"
                />
                <Container>
                    <Row>
                        <img src={logo} alt="" />
                    </Row>
                    <Row>
                        <h4>{t('footer.companyName')}</h4>
                    </Row>
                    <Row>
                        <div className="img"><img src={truso} alt="" /></div>
                        <div>
                            <span>{t('footer.addr')}</span><br />
                            {t('footer.address')}
                        </div>
                    </Row>
                    <Row>
                        <div className="inrow">
                            <div className="img"><img src={dienthoai} alt="" /></div>
                            <div>
                                <span>{t('footer.phone')}</span><br />
                                (028) 39637678
                            </div>
                        </div>
                        <div className="inrow">
                            <div className="img"><img src={fax} alt="" /></div>
                            <div>
                                <span>FAX</span><br />
                                (028) 39637679
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className="img"><img src={giayphepkinhdoanh} alt="" /></div>
                        <div>
                            <span>{t('footer.gpkd')}</span><br />
                            {t('footer.gpkdDetail')}
                        </div>
                    </Row>
                    <Row>
                        <div className="img"><img src={masothue} alt="" /></div>
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
                            <a className="face" href="https://www.facebook.com/">
                                <img src={facebook} alt="" />
                            </a>
                            <a className="youtube" href="https://www.youtube.com/">
                                <img src={youtube} alt="" />
                            </a>
                            <a className="in" href="https://www.linkedin.com/">
                                <img src={inI} alt="" />
                            </a>
                        </div>
                    </Row>
                </Container>
            </Figure>

            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62712.096755965526!2d106.63502353718317!3d10.772500054351118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ede0aa80245%3A0x2b6b5c4999a448ce!2zNzQwIFPGsCBW4bqhbiBI4bqhbmgsIFBoxrDhu51uZyAxMiwgUXXhuq1uIDEwLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1607483130626!5m2!1sen!2s"
                frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" title="map"></iframe>
        </footer>
    );
}
export default TheFooter
