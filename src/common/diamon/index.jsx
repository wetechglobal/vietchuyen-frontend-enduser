import { OverlayTrigger, Button } from 'react-bootstrap';
import React, { useState } from "react";
import parse from 'html-react-parser';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';
import ICONS from 'assets/icons/icons';
import config from 'common/config';
import './style.scss';

const Diamond = (props) => {
    const { name, provider, property, benefit, src, bgColor, hidden } = props;
    const { t } = useTranslation();
    const [show, setShow] = useState(false);

    return (
        <OverlayTrigger className="tooltip" key="top" trigger="click" placement="top" show={show}
            overlay={
                <div style={{
                    backgroundColor: 'white',
                    padding: '20px 20px',
                    color: 'black',
                    borderRadius: 10,
                    width: 500,
                    boxShadow: '1px 2px 10px',
                    zIndex: 2,
                    position: 'relative'
                }}>
                    <h3 style={{ color: '#0063B0', fontWeight: 'bold', }}>{parse(name ? name : '')}</h3>
                    <Button onClick={() => setShow(false)} variant="light" style={{ position: 'absolute', right: 10, top: 0, fontSize: 30, border: 'none', backgroundColor: 'transparent' }}>&times;</Button>
                    <h6 style={{ color: 'red', fontWeight: 'bold', textTransform: 'uppercase' }}>{provider}</h6>
                    <div>
                        <div>
                            <img src={ICONS.BULLET} alt="" width="15" />
                            <span style={{ color: '#0063B0', fontWeight: 'bold', lineHeight: 2, marginLeft: 5 }}>{t('diamond.character')}</span>
                        </div>
                        <div style={{ marginLeft: 20 }}>{property}</div>
                    </div>
                    <hr />
                    <div>
                        <div>
                            <img src={ICONS.BULLET} alt="" width="15" />
                            <span style={{ color: '#0063B0', fontWeight: 'bold', lineHeight: 2, marginLeft: 5 }}>{t('diamond.benefit')}</span>
                        </div>
                        <div style={{ marginLeft: 20 }}>{benefit}</div><br />
                    </div>
                    <HashLink to="/contact#contact"><Button variant="primary" size="lg" active>
                        {t('diamond.btnQuote')}
                    </Button></HashLink>
                </div>
            }>
            <div className="item" style={{ backgroundColor: bgColor, visibility: hidden }} onClick={() => setShow(true)}>
                <div className="content">
                    <img src={config.HOST + src} alt="" />
                    <span className="title">{parse(name ? name : '')}</span>
                </div>
            </div>
        </OverlayTrigger>
    )
}

export default Diamond