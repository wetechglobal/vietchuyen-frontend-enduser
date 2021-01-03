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
const Contact = () => {
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
                <Col lg={5} md={6}>
                    <Row style={{ marginTop: '100px' }}>
                        <Col md={{ span: 5, offset: 7 }} >
                            <img src={header} className='trusochinh' alt="" />
                            <p className='text-truso'>
                                Trụ Sở
                            <img src={muitenxam} className='muitenxam' alt="" />
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col lg={5} md={6} className='infoborder'>
                    <Row className='diachi' >
                        <Col >
                            302 Tòa nhà Độc Lập A, Phường Tân Quý, Quận Tân Phú, TP. HCM
                    </Col>
                    </Row>
                    <Row>
                        <Col className='dienthoai' >
                            <img src={dienthoai} style={{ width: '44px', position: 'relative' }} alt="" /> (028) 3963 7678
                    </Col>
                        <Col className='fax' style={{ marginTop: '2%' }}>
                            <img src={fax} style={{ width: '44px', position: 'relative' }} alt="" /> Fax: (028) 3963 7679
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{ marginTop: '100px' }}>
                <Col md={5}>
                    <Row style={{ marginTop: '100px' }}>
                        <Col md={{ span: 5, offset: 7 }} style={{ marginTop: '300px' }} >
                            <img src={hethongdaily} className='dailyhethongicon' alt="daily-hethong" />

                            <p className='text-truso' style={{ fontSize: '65px', marginTop: '50px' }}>
                                Hệ thống đại lý và trung tâm hỗ trợ kỹ thuật
                            <img src={muitenxam} className='muitenxam' alt="muiten-xam" />
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col md={5} className=''>
                    <Row>
                        <Col md={12} className='infoborder'>
                            <Row className='dailyhethongtext' >
                                <Col >
                                    1. Trung tâm hỗ trợ kỹ thuật và dịch vụ tại Hà Nội.
                                </Col>
                            </Row>
                            <Row className='vanphongtext' >
                                <Col >
                                    Văn phòng đại diện Công ty TNHH Công Nghệ Việt Chuyên SG
                                </Col>
                            </Row>
                            <Row className='diachitext' >
                                <Col >
                                    Số 81, Ngõ 530 đường Thụy Khuê, Phường Bưởi, Quận Tây Hồ, TP. HN.
                                </Col>
                            </Row>
                            <Row>
                                <Col className='dienthoai' >
                                    <img src={dienthoai} style={{ width: '44px', position: 'relative' }} alt="" /> (028) 3963 7678
                                </Col>
                            </Row>
                        </Col>
                        <Col md={12} className='infoborder'>
                            <Row className='dailyhethongtext' >
                                <Col >
                                    2. Trung tâm hỗ trợ kỹ thuật và dịch vụ tại Hà Nội.
                                </Col>
                            </Row>
                            <Row className='vanphongtext' >
                                <Col >
                                    Văn phòng đại diện Công ty TNHH Công Nghệ Việt Chuyên SG
                                </Col>
                            </Row>
                            <Row className='diachitext' >
                                <Col >
                                    Số 81, Ngõ 530 đường Thụy Khuê, Phường Bưởi, Quận Tây Hồ, TP. HN.
                                </Col>
                            </Row>
                            <Row>
                                <Col className='dienthoai' >
                                    <img src={dienthoai} style={{ width: '44px', position: 'relative' }} alt="" /> 0511 3679 222
                                </Col>
                                <Col className='fax' style={{ marginTop: '2%' }}>
                                    <img src={fax} style={{ width: '44px', position: 'relative' }} alt="" /> Fax: 0511 3679 224
                                </Col>
                            </Row>
                        </Col>
                        <Col md={12} className='infoborder'>
                            <Row className='dailyhethongtext' >
                                <Col >
                                    3. Trung Tâm Hỗ Trợ Kỹ Thuật Và Dịch Vụ Tại Cần Thơ
                                </Col>
                            </Row>
                            <Row className='vanphongtext' >
                                <Col >
                                    Công Ty TNHH Mtv Công Nghệ An Phát Minh
                                </Col>
                            </Row>
                            <Row className='diachitext' >
                                <Col >
                                    E1 Đường số 56, KDC 586, P.Phú Thứ, Q.Cái Răng, TP.Cần Thơ
                                </Col>
                            </Row>
                            <Row>
                                <Col className='dienthoai' >
                                    <img src={dienthoai} style={{ width: '44px', position: 'relative' }} alt="" /> 0292 3918 118
                                </Col>
                                <Col className='fax' style={{ marginTop: '2%' }}>
                                    <img src={fax} style={{ width: '44px', position: 'relative' }} alt="" /> Fax: 00292 3737 980
                                </Col>
                            </Row>
                        </Col>
                        <Col md={12} className='infoborder'>
                            <Row className='dailyhethongtext' >
                                <Col >
                                    4. Trung tâm hỗ trợ kỹ thuật và dịch vụ tại trà vinh
                                </Col>
                            </Row>
                            <Row className='vanphongtext' >
                                <Col >
                                    Trung Tâm Bảo Hành Sửa Chữa Thiết Bị Vt- Cntt Vnpt Trà Vinh
                                </Col>
                            </Row>
                            <Row className='diachitext' >
                                <Col >
                                    70 Hùng Vương, P. 4, TP.Trà Vinh, Tỉnh Trà Vinh
                                </Col>
                            </Row>
                            <Row>
                                <Col className='dienthoai' >
                                    <img src={dienthoai} style={{ width: '44px', position: 'relative' }} alt="" /> (074) 3 855 777
                                </Col>
                                <Col className='fax' style={{ marginTop: '2%' }}>
                                    <img src={fax} style={{ width: '44px', position: 'relative' }} alt="" /> Fax: (074) 3 853 444
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row >
                <Col md={5}>
                    <Row style={{ marginTop: '100px' }}>
                        <Col md={{ span: 5, offset: 7 }} >
                            <img src={lienhengay} className='lienhengay' alt="" />
                            <p className='text-truso'>
                                Liên hệ ngay
                            <img src={muitenxam} className='muitenxam' alt="" />
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col md={4} style={{ marginTop: '100px' }}>
                    <Form>
                        <Row >
                            <Col >
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1" className='BG-hoten'>
                                            <img src={hovaten} className='hoten' alt="" />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl className='BG-input'
                                        placeholder="Họ và tên"
                                        aria-label="hoten"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1" className='BG-hoten'>
                                            <img src={email} className='email' alt="" />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl className='BG-input'
                                        placeholder="Email"
                                        aria-label="email"
                                        aria-describedby="basic-addon1"
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
                                        <FormControl className='BG-input' style={{ height: '155px' }}
                                            placeholder="Nội dung yêu cầu"
                                            aria-label="email"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                            </Col>
                        </Row>
                            <Row>
                                <Col>
                                    <Button variant="primary" type="submit" className='guiyeucau' style={{ width: '100%' }}>
                                        GỬI YÊU CẦU
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
