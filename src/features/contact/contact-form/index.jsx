/* eslint-disable jsx-a11y/iframe-has-title */

import { Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import './style.scss';
import ICONS from 'assets/icons/icons';
import { useTranslation } from 'react-i18next';

const ContactForm = (props) => {
    const { fullName, email, message } = props
    const { t } = useTranslation();
    return (
        <div className='contact-form' >
            <Form>
                <Row >
                    <Col >
                        <InputGroup className="mb-3 ">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="exampleInputFullName" className='BG-hoten' >
                                    <img src={ICONS.FULLNAME} className='icon-form' alt="" />
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
                                    <img src={ICONS.EMAIL} className='icon-form' alt="" />
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
                                <InputGroup.Text id="basic-addon1" className='BG-hoten' >
                                    <img src={ICONS.REQUESTCONTENT} className='icon-content' alt="" />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl className='BG-input'  required
                                aria-label="text"
                                aria-describedby="basic-addon1"
                            />
                            <span className="placeholder">{t('contact.content')}</span>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button type="submit" className='submit-content' style={{ width: '100%' }}>
                            {t('contact.submit')}
                        </Button>
                    </Col>
                </Row>
            </Form>

        </div>
    );
}
export default ContactForm
