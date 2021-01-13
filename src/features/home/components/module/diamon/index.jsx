import { OverlayTrigger, Button } from 'react-bootstrap';
import React, { useState } from "react";
import './style.scss';

const Diamond = (props) => {
    const {name, provider, property, benefit, src, bgColor, hidden} = props;
    const [show, setShow] = useState(false);

    return (
        <OverlayTrigger className="tooltip" key="top" trigger="click" placement="top"
            overlay={
                <div style={{
                    backgroundColor: 'white',
                    padding: '20px 20px',
                    color: 'black',
                    borderRadius: 10,
                    width: 500,
                    boxShadow: '1px 2px 10px'
                }}>
                    <h4 style={{ color: '#0063B0', fontWeight: 'bold', }}>{name}</h4>
                    <h5 style={{ color: 'red', fontWeight: 'bold', textTransform: 'uppercase'}}>{provider}</h5>
                    <hr/>
                    <span>{property}</span><br/><br/>
                    <span>{benefit}</span><br/><br/>
                    <Button variant="primary" size="lg" active>
                        LIÊN HỆ BÁO GIÁ
                    </Button>
                </div>
            }>
            <div className="item" style={{backgroundColor: bgColor, visibility : hidden}}>
                <div className="content">
                    <img src={src} alt="" />
                    <span className="title">{name}</span>
                </div>
            </div>
        </OverlayTrigger>
    )
}

export default Diamond