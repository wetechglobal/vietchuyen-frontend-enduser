// import IMAGES from 'assets/images/images';
import { Col, Nav } from 'react-bootstrap';
import  IMAGES from "../../../../assets/images/images";
import './style.scss';

const GroupNews = ({ data }) => {
    return <>
        {   
            data.map((item, idx) => {
                let lineTextColor = item.type === 1 ? 'red' : 'blue';
                let lineCodeColor = item.type === 1  ? '#E50019' : '#0063B0';
                let labelColor = item.type === 1 ? '#E50019' : '#0063B0';
                let imgSrc = item.type === 1 ? IMAGES.DEFAULT_NEWS : IMAGES.DEFAULT_TECHNEWS;
                return <Col key={idx} lg={4} md={6} className="box-col">
                        <div className="box">
                            <div className="box-top">
                                <svg className="box-thumbnail">
                                    <polygon points="0,0 0,358 170,358 358,160 358,0" fill="url(#news-thumbnail)" />
                                    Sorry, your browser does not support inline SVG.
                                </svg>
                                <svg className="pattern-img">
                                    <defs>
                                        <pattern id="news-thumbnail" height="100%" width="100%" patternContentUnits="objectBoundingBox">
                                            <image height="1" width="1" 
                                                preserveAspectRatio="none" 
                                                className="thumbnail-image" 
                                                xlinkHref={imgSrc} />
                                        </pattern>
                                    </defs>
                                </svg>
                                <svg className="news-line">
                                    <polyline points="120,300 246,300 358,180" className={'line ' + lineTextColor} />
                                </svg>
                                <svg className="circle" height="20" width="20">
                                    <circle cx="8" cy="8" r="4" stroke={lineCodeColor} strokeWidth="2" fill="white" />
                                </svg>
                                <div className="text" style={{color: labelColor}}>{item.type === 1 ? 'Tin sự kiện' : 'Tin công nghệ'}</div>
                            </div>
                            <div className="box-date">
                                <span>{item.date}</span>
                            </div>
                            <div className="box-label"><Nav.Link href="/news/:id">{item.label}</Nav.Link></div>
                            <div className="box-bottom">{item.description}</div>
                        </div>
                    </Col>
            })
        }
    </>
}

export default GroupNews
