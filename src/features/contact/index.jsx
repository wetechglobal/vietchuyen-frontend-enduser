/* eslint-disable jsx-a11y/iframe-has-title */

import { Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import title from 'assets/images/lienhe.png';
import header from 'assets/icons/trusochinh.svg';
import dienthoai from 'assets/icons/dienthoai.svg'
import fax from 'assets/icons/FAXxanh.svg';
import muitenxam from 'assets/icons/muitenxam.svg';
import hethongdaily from 'assets/icons/hethongdaily.svg';
import lienhengay from 'assets/icons/lienhengay.svg';
import hovaten from 'assets/icons/hoten.svg'
import email from 'assets/icons/email.svg'
import noidungyeucau from 'assets/icons/noidungyeucau.svg'
import './style.scss';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';
const Contact = () => {
    const { t } = useTranslation();
    return (
        <div className="contact">
            <Row>
                <Col>
                    <div>
                        <img src={title} className='title-img' alt="" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xl={5} lg={5} md={5}>
                    <Row style={{ marginTop: '100px' }}>
                        <Col xl={{ span: 5, offset: 7 }} lg={{ span: 8, offset: 5 }} md={{ span: 10, offset: 1 }}>
                            <img src={header} className='trusochinh' alt="" />
                            <p className='text-truso'>
                                {t('contact.headQuarter')}
                                <img src={muitenxam} className='muitenxam' alt="" />
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col xl={6} lg={7} md={7}>
                    <div className='infoborder'>
                        <Row className='diachi' >
                            <Col >
                                {parse(t('contact.hdAddress'))}
                            </Col>
                        </Row>
                        <Row>
                            <Col className='dienthoai' md={5} >
                                <img src={dienthoai} className='img-dienthoai' alt="" /> (028) 3963 7678
                    </Col>
                            <Col className='fax' md={6}>
                                <img src={fax} className='img-dienthoai' alt="" /> Fax: (028) 3963 7679
                        </Col>
                        </Row>

                    </div>

                </Col>
            </Row>
            <Row style={{ marginTop: '100px' }}>
                <Col xl={5} lg={5} md={5}>
                    <Row style={{ marginTop: '100px' }}>
                        <Col xl={{ span: 5, offset: 7 }} lg={{ span: 8, offset: 5 }} md={{ span: 10, offset: 1 }} style={{ marginTop: '300px' }} >
                            <img src={hethongdaily} className='dailyhethongicon' alt="daily-hethong" />

                            <p className='text-truso' >
                                {t('contact.supportCenter')}
                                <img src={muitenxam} className='muitenxam' alt="muiten-xam" />
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col xl={6} lg={7} md={7}>
                    <Row>
                        <Col md={12} >
                            <div className='border-HN'>
                                <Row className='dailyhethongtext'>
                                    <Col >
                                        {parse(t('contact.HN'))}
                                    </Col>
                                </Row>
                                <Row className='vanphongtext' >
                                    <Col >
                                        {parse(t('contact.HNname'))}
                                    </Col>
                                </Row>

                                <Row className='diachitext' >
                                    <Col >
                                        {t('contact.HNadd')}
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className='dienthoai'>
                                        <img src={dienthoai} className='img-dienthoai' alt="" style={{ marginLeft: '25px' }} /> ((028) 3963 7678
                            </Col>
                                </Row>

                            </div>

                        </Col>

                        <Col md={12} >
                            <div className='border-DN'>
                                <Row className='dailyhethongtext'>
                                    <Col >
                                        {parse(t('contact.DN'))}
                                    </Col>
                                </Row>
                                <Row className='vanphongtext' >
                                    <Col >
                                        {t('contact.DNname')}
                                    </Col>
                                </Row>

                                <Row className='diachitext' >
                                    <Col >
                                        {t('contact.DNadd')}
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className='dienthoai' md={6}>
                                        <img src={dienthoai} className='img-dienthoai' alt="" style={{ marginLeft: '25px' }} /> 0511 3679 222
                                    </Col>

                                    <Col className='fax' md={6}>
                                        <img src={fax} className='img-dienthoai' alt="" /> Fax: 0511 3679 224
                                    </Col>
                                </Row>

                            </div>

                        </Col>

                        <Col md={12} >
                            <div className='border-DN'>
                                <Row className='dailyhethongtext'>
                                    <Col >
                                        {parse(t('contact.CT'))}
                                    </Col>
                                </Row>
                                <Row className='vanphongtext' >
                                    <Col >
                                        {t('contact.CTname')}
                                    </Col>
                                </Row>

                                <Row className='diachitext' >
                                    <Col >
                                        {t('contact.CTadd')}
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className='dienthoai' md={6}>
                                        <img src={dienthoai} className='img-dienthoai' alt="" style={{ marginLeft: '25px' }} /> 0292 3918 118
                                    </Col>

                                    <Col className='fax' md={6}>
                                        <img src={fax} className='img-dienthoai' alt="" /> Fax: 00292 3737 980
                                    </Col>
                                </Row>

                            </div>

                        </Col>

                        <Col md={12} >
                            <div className='border-HN'>
                                <Row className='dailyhethongtext'>
                                    <Col >
                                        {parse(t('contact.TV'))}
                                    </Col>
                                </Row>
                                <Row className='vanphongtext' >
                                    <Col >
                                        {parse(t('contact.TVname'))}
                                    </Col>
                                </Row>

                                <Row className='diachitext' >
                                    <Col >
                                        {t('contact.TVadd')}
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className='dienthoai' md={6}>
                                        <img src={dienthoai} className='img-dienthoai' alt="" style={{ marginLeft: '25px' }} /> (074) 3 855 777
                                    </Col>

                                    <Col className='fax' md={6}>
                                        <img src={fax} className='img-dienthoai' alt="" /> Fax: (074) 3 853 444
                                    </Col>
                                </Row>

                            </div>

                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row id="contact">
                <Col md={5}>
                    <Row style={{ marginTop: '100px' }}>
                        <Col md={{ span: 5, offset: 7 }} >
                            <img src={lienhengay} className='lienhengay' alt="" />
                            <p className='text-truso'>
                                {t('contact.contactNow')}
                                <img src={muitenxam} className='muitenxam' alt="" />
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col md={4} style={{ marginTop: '100px' }}>
                    <Form>
                        <Row >
                            <Col >
                                <InputGroup className="mb-3 ">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="exampleInputFullName" className='BG-hoten ' >
                                            <img src={hovaten} className='hoten' alt="" />
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
                                            <img src={email} className='email' alt="" />
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
                                            <img src={noidungyeucau} className='noidungyeucau' alt="" />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl className='BG-input' style={{ height: '155px' }} required
                                        placeholder={t('contact.content')}
                                        aria-label="email"
                                        aria-describedby="basic-addon1"
                                    />
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
    );
}
export default Contact
