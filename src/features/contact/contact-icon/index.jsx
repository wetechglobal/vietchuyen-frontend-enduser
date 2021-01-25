/* eslint-disable jsx-a11y/iframe-has-title */

import { Row, Col } from 'react-bootstrap';
import './style.scss';


const ContactIcon = (props) => {
    const { src, title, arrow } = props
    return (
        <div className='contact-icon' style={{marginTop:'100px'}}>
            <div style={{float:'right' , width:'50%'}} >
            <Row>
                <Col>
                    <img src={src} className='image' alt="" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='icon-defined'>
                        {title}
                        <img src={arrow} className='arrow' alt="" />
                    </p>
                </Col>
            </Row>

            </div>
            

        </div>
    );
}
export default ContactIcon
