import { Row, Col, Nav, Image } from 'react-bootstrap';
import  IMAGES from "assets/images/images";

import './style.scss';

const GroupNewsHighlight = ({data}) => {
    return <Row className="box-group">
        {
            data.map((item, idx) => {
                return <Col key={idx} lg={6} md={6} className="box-group-col">
                    <div className="box box-group-higlight">
                        <div className="box-top">
                            <svg className="box-thumbnail box-thumbnail-highlight">
                                <polygon points="0,0 0,358 440,360 635,160 620,0" fill="url(#news-thumbnail)" />
                                Sorry, your browser does not support inline SVG.
                            </svg>
                            <svg className="pattern-img">
                                <defs>
                                    <pattern id="news-thumbnail" height="100%" width="100%" patternContentUnits="objectBoundingBox">
                                        <image height="1" width="1" preserveAspectRatio="none" className="thumbnail-image" xlinkHref={item.src} />
                                    </pattern>
                                </defs>
                            </svg>
                            <svg className="news-line news-line-highlight">
                                <polyline points="120,300 520,300 630,185" className='line red' />
                            </svg>
                            <svg height="20" width="20" className="circle">
                                <circle cx="8" cy="8" r="4" stroke="#E50019" strokeWidth="2" fill="white" />
                            </svg>
                            <div className="text" style={{color: "#E50019"}}>{item.type === 1 ? 'Tin sự kiện' : 'Tin công nghệ'}</div>
                            <div className="triagle"></div>
                            <div className="text-higlight">NỔI BẬT</div>
                            <div className="image-icon"><Image src={IMAGES.ROUNDED_STAR}/></div>
                        </div>
                        <div className="box-date"><span>{item.date}</span></div>
                        <div className="box-lable"><Nav.Link href="/news/:id">{item.label}</Nav.Link></div>
                        <div className="box-bottom">{item.description}</div>
                    </div>
                </Col>
            })
        }
    </Row>
}

export default GroupNewsHighlight;
