/* eslint-disable jsx-a11y/iframe-has-title */

import { Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import './style.scss';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';
import ContactIcon from './contact-icon/index';
import ContactBox from './contact-box/index';
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
                        <ContactBox addressStyle = 'header-address'
                            address={t('contact.hdAddress')} phone='0292 3918 118' fax='Fax: (028) 3963 7679' hidden='hidden'>
                        </ContactBox>
                    </Col>
                </Row>

                <Row style={{ marginTop: '100px' }}>
                    <Col lg={5}>
                        <ContactIcon  src={ICONS.AGENTSYSTEM} title={t('contact.supportCenter')} arrow={ICONS.GREYARROW}></ContactIcon>
                    </Col>
                    <Col lg={6}>
                        <ContactBox title={parse(t('contact.HN'))} addressStyle = 'address' companyName={parse(t('contact.HNname'))}
                            address={t('contact.CTadd')} phone='(028) 3963 7678' hidden='hidden'
                        >
                        </ContactBox>
                        <ContactBox title={parse(t('contact.DN'))} addressStyle = 'address' companyName={t('contact.DNname')}
                            address={t('contact.DNadd')} phone='0511 3679 222' icon={ICONS.FAXXANH} fax='Fax: 0511 3679 224'
                        >
                        </ContactBox>
                        <ContactBox title={parse(t('contact.CT'))}  addressStyle = 'address' companyName={t('contact.CTname')}
                            address={t('contact.CTadd')} phone='0292 3918 118' icon={ICONS.FAXXANH} fax='Fax: 0292 3737 980'
                        >
                        </ContactBox>
                        <ContactBox title={parse(t('contact.TV'))}  addressStyle = 'address' companyName={parse(t('contact.TVname'))}
                            address={t('contact.TVadd')} phone='(074) 3 855 777' icon={ICONS.FAXXANH} fax='Fax: (074) 3 853 444'
                        >
                        </ContactBox>
                    </Col>
                </Row>

                <Row id="contact" style={{ marginTop: '100px' }}>
                    <Col lg={5}>
                        <ContactIcon src={ICONS.CONTACTNOW}  arrow={ICONS.GREYARROW} title={t('contact.contactNow')}></ContactIcon>
                    </Col>
                    <Col lg={6}>

                    <Form>
                        <Row >
                            <Col >
                                <InputGroup className="mb-3 ">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="exampleInputFullName" className='BG-hoten ' >
                                            <img src={ICONS.FULLNAME} className='hoten' alt="" />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl className='BG-input' required
                                        placeholder={t('contact.fullname')}
                                        aria-label="hoten"
                                        type="text"
                                        id="validationCustomUsername"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                                <InputGroup className="mb-3 form-group">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1" className='BG-hoten' >
                                            <img src={ICONS.EMAIL} className='email' alt="" />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl className='BG-input' required
                                        placeholder="Email"
                                        aria-label="email"
                                        aria-describedby="basic-addon1"
                                        type="email"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1" className='BG-hoten' style={{ height: '155px' }}>
                                            <img src={ICONS.REQUESTCONTENT} className='noidungyeucau' alt="" />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl className='BG-input' style={{ height: '155px', borderTopRightRadius: '13px', borderBottomRightRadius: '13px' }} required
                                        aria-label="text"
                                        aria-describedby="basic-addon1"
                                    />
                                    <span className="placeholder">{t('contact.content')}</span>
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button type="submit" className='guiyeucau' style={{ width: '100%' }}>
                                    {t('contact.submit')}
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default Contact
