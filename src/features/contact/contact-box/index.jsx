/* eslint-disable jsx-a11y/iframe-has-title */

import { Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import './style.scss';
import ICONS from 'assets/icons/icons';


const ContactBox = (props) => {

    const { title, companyName, address, phone, fax, icon, addressStyle } = props
    return (
        <div className='info-box' style={{position:'relative'}}>
            <Col md={12} >
                <div >
                    <Row className='agent-name'>
                        <Col >{title}</Col>
                    </Row>
                    
                    <Row className='office-name'>
                        <Col >{companyName}</Col>
                    </Row>
                    <Row className={addressStyle}>
                        <Col >{address}</Col>
                    </Row>
               
                    <Row className='img-position'>
                        <Col className='phone' md={5}>
                            <img src={ICONS.DIENTHOAI} className='img-phone' alt="" /> {phone}
                        </Col>

                        <Col className='fax' md={7}>
                            <img src={icon} className='img-phone' alt="" /> {fax}
                        </Col>
                    </Row>

                </div>

            </Col>
        </div>
    );
}
export default ContactBox
