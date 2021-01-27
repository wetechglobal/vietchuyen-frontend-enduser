/* eslint-disable jsx-a11y/iframe-has-title */

import { Row, Col } from 'react-bootstrap';
import './style.scss';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';
import ContactIcon from './contact-icon/index';
import ContactBox from './contact-box/index';
import ContactForm from './contact-form/index';
import ICONS from 'assets/icons/icons';
import IMAGES from 'assets/images/images';
const Contact = () => {
    const { t } = useTranslation();
    return (
        <div className="contact">
            <div >
                <img src={IMAGES.CONTACTIMG} className='title-img' />
            </div>

            <div className="background">
                <Row style={{ marginTop: '50px' }}>
                    <Col lg={5}>
                        <ContactIcon src={ICONS.HEADOFFICE} title={t('contact.headQuarter')} arrow={ICONS.GREYARROW}></ContactIcon>
                    </Col>
                    <Col lg={6}>
                        <ContactBox addressStyle='header-address'
                            address={t('contact.hdAddress')} phone='0292 3918 118' icon={ICONS.FAXXANH} fax='Fax: (028) 3963 7679' hidden='hidden'>
                        </ContactBox>
                    </Col>
                </Row>

                <Row style={{ marginTop: '100px' }}>
                    <Col lg={5}>
                        <ContactIcon src={ICONS.AGENTSYSTEM} title={t('contact.supportCenter')} arrow={ICONS.GREYARROW}></ContactIcon>
                    </Col>
                    <Col lg={6}>
                        <ContactBox title={parse(t('contact.HN'))} addressStyle='address' companyName={parse(t('contact.HNname'))}
                            address={t('contact.CTadd')} phone='(028) 3963 7678' hidden='hidden'
                        >
                        </ContactBox>
                        <ContactBox title={parse(t('contact.DN'))} addressStyle='address' companyName={t('contact.DNname')}
                            address={t('contact.DNadd')} phone='0511 3679 222' icon={ICONS.FAXXANH} fax='Fax: 0511 3679 224'
                        >
                        </ContactBox>
                        <ContactBox title={parse(t('contact.CT'))} addressStyle='address' companyName={t('contact.CTname')}
                            address={t('contact.CTadd')} phone='0292 3918 118' icon={ICONS.FAXXANH} fax='Fax: 0292 3737 980'
                        >
                        </ContactBox>
                        <ContactBox title={parse(t('contact.TV'))} addressStyle='address' companyName={parse(t('contact.TVname'))}
                            address={t('contact.TVadd')} phone='(074) 3 855 777' icon={ICONS.FAXXANH} fax='Fax: (074) 3 853 444'
                        >
                        </ContactBox>
                    </Col>
                </Row>

                <Row style={{ marginTop: '100px' }}>
                    <Col lg={5}>
                        <ContactIcon src={ICONS.CONTACTNOW} arrow={ICONS.GREYARROW} title={t('contact.contactNow')}></ContactIcon>
                    </Col>
                    <Col lg={5}>
                        <ContactForm></ContactForm>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default Contact
