import { Col, Nav, Image } from 'react-bootstrap';
// import  IMAGES from "assets/images/images";
import  IMAGES from "../../../../assets/images/images";

import './style.scss';
import { useState } from 'react';

const GroupNewsHighlight = ({ data }) => {
    const initialState = "0,0 0,382 410,355 620,140 620,0";
    const scalePoint = "0,0 0,450 410,355 620,140 620,0";
    const [pointValue, setPointValue] = useState(initialState);

    // const makeScalePolygon = () => {
    //     setPointValue(scalePoint);
    // }

    // const resetScalePolygon = () => {
    //     setPointValue(initialState);
    // }

    return <> 
        {
            data.map((item, idx) => {
                return <Col key={idx} className="box-group" lg={6} md={12} sm={12}>
                    <div className="box">
                        <div className="box-top" 
                            // onMouseOver={makeScalePolygon} 
                            // onMouseOut={resetScalePolygon} 
                            >
                            <svg className="box-thumbnail">
                                <polygon points={pointValue} fill="url(#news-thumbnail)" id="myPolygon" />
                                Sorry, your browser does not support inline SVG.
                            </svg>
                            <svg className="pattern-img">
                                <defs>
                                    <pattern id="news-thumbnail" height="100%" width="100%" patternContentUnits="objectBoundingBox">
                                        <image height="1" width="1" preserveAspectRatio="none" className="thumbnail-image" xlinkHref={item.src} />
                                    </pattern>
                                </defs>
                            </svg>
                            <svg className="news-line">
                                <polyline points="120,300 480,300 623,155" className='line red' />
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
    </>
}

export default GroupNewsHighlight;
