import { Row, Col, Nav } from 'react-bootstrap';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IMAGES from "assets/images/images";
import './style.scss';

const LatestNews = () => {
    const latestNews = [
        {
            src: IMAGES.DEFAULT_NEWS,
            alt: 'giai-phap-hoi-nghi-truyen-hinh',
            date: '17-10-2020',
            type: 'Tin sự kiện',
            label: 'Giới thiệu giải pháp hội nghị truyền hình Vũng Tàu',
            description: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
        },
        {
            src: IMAGES.DEFAULT_NEWS,
            alt: 'giai-phap-hoi-nghi-truyen-hinh',
            date: '17-10-2020',
            type: 'Tin công nghệ',
            label: 'Giới thiệu giải pháp hội nghị truyền hình Vũng Tàu',
            description: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
        },
        {
            src: IMAGES.DEFAULT_NEWS,
            alt: 'giai-phap-hoi-nghi-truyen-hinh',
            date: '17-10-2020',
            type: 'Tin trong nước',
            label: 'Giới thiệu giải pháp hội nghị truyền hình Vũng Tàu',
            description: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
        },
    ];
    return <Row className="box-group">
        {
            latestNews.map((item, idx) => {
                let lineTextColor = idx % 2 === 0 ? 'red' : 'blue';
                let lineCodeColor = idx % 2 === 0 ? '#E50019' : '#0063B0';
                return <Col key={idx} lg={4} md={6}>
                    <div className="box">
                        <div className="box-top">
                            <svg className="box-thumbnail">
                                <polygon points="0,0 0,358 170,358 358,160 358,0" fill="url(#news-thumbnail)" />
                                Sorry, your browser does not support inline SVG.
                            </svg>
                            <svg className="pattern-img">
                                <defs>
                                    <pattern id="news-thumbnail" height="100%" width="100%" patternContentUnits="objectBoundingBox">
                                        <image height="1" width="1" preserveAspectRatio="none"
                                            xlinkHref="https://i.ibb.co/kHBbYFF/hinhbaidang.png" />
                                    </pattern>
                                </defs>
                            </svg>

                            <svg className="news-line">
                                <polyline points="120,300 246,300 358,180" className={'line ' + lineTextColor} />
                            </svg>
                            <svg height="20" width="20" className="circle">
                                <circle cx="8" cy="8" r="4" stroke={lineCodeColor} strokeWidth="2" fill="white" />
                            </svg>
                            <div className="text">{item.type}</div>
                        </div>
                        <div className="box-date">
                            <span>{item.date}</span>
                        </div>
                        <div className="box-lable"><Nav.Link href="/news/:id">{item.label}</Nav.Link></div>
                        <div className="box-bottom">{item.description}</div>
                    </div>
                </Col>
            })
        }
    </Row>
}

export default LatestNews
