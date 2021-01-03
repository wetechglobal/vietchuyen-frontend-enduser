/* eslint-disable jsx-a11y/alt-text */
import  IMAGES from "assets/images/images";
import { useState } from "react";
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import GroupNews from './components/groupNew/index';
import GroupNewNoiBat from './components/groupNewNoiBat/index';
import './style.scss';

const News = () => {
    const DATANEWS = [
        {
            group: [
                {
                    src: IMAGES.DEFAULT_NEWS,
                    alt: 'giai-phap-hoi-nghi-truyen-hinh',
                    date: '17-10-2020',
                    type: 1, // tin su kien
                    label: 'Giới thiệu giải pháp hội nghị truyền hình Vũng Tàu',
                    description: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
                },
                {
                    src: IMAGES.DEFAULT_NEWS,
                    alt: 'giai-phap-hoi-nghi-truyen-hinh',
                    date: '17-10-2020',
                    type: 1, // tin cong nghe
                    label: 'Giới thiệu giải pháp hội nghị truyền hình Vũng Tàu',
                    description: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
                },
                {
                    src: IMAGES.DEFAULT_NEWS,
                    alt: 'giai-phap-hoi-nghi-truyen-hinh',
                    date: '17-10-2020',
                    type: 1,
                    label: 'Giới thiệu giải pháp hội nghị truyền hình Vũng Tàu',
                    description: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
                },
                {
                    src: IMAGES.DEFAULT_NEWS,
                    alt: 'giai-phap-hoi-nghi-truyen-hinh',
                    date: '17-10-2020',
                    type: 1,
                    label: 'Giới thiệu giải pháp hội nghị truyền hình Vũng Tàu',
                    description: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
                },
                {
                    src: IMAGES.DEFAULT_NEWS,
                    alt: 'giai-phap-hoi-nghi-truyen-hinh',
                    date: '17-10-2020',
                    type: 1,
                    label: 'Giới thiệu giải pháp hội nghị truyền hình Vũng Tàu',
                    description: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
                },
                {
                    src: IMAGES.DEFAULT_NEWS,
                    alt: 'giai-phap-hoi-nghi-truyen-hinh',
                    date: '17-10-2020',
                    type: 1,
                    label: 'Giới thiệu giải pháp hội nghị truyền hình Vũng Tàu',
                    description: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
                }
            ]
        },
        {
            group: [
                {
                    src: IMAGES.DEFAULT_NEWS,
                    alt: 'giai-phap-hoi-nghi-truyen-hinh',
                    date: '17-10-2020',
                    type: 2,
                    label: 'Giới thiệu giải pháp hội nghị truyền hình Vũng Tàu',
                    description: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
                },
                {
                    src: IMAGES.DEFAULT_NEWS,
                    alt: 'giai-phap-hoi-nghi-truyen-hinh',
                    date: '17-10-2020',
                    type: 2,
                    label: 'Giới thiệu giải pháp hội nghị truyền hình Vũng Tàu',
                    description: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
                },
                {
                    src: IMAGES.DEFAULT_NEWS,
                    alt: 'giai-phap-hoi-nghi-truyen-hinh',
                    date: '17-10-2020',
                    type: 2,
                    label: 'Giới thiệu giải pháp hội nghị truyền hình Vũng Tàu',
                    description: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
                },
                {
                    src: IMAGES.DEFAULT_NEWS,
                    alt: 'giai-phap-hoi-nghi-truyen-hinh',
                    date: '17-10-2020',
                    type: 2,
                    label: 'Giới thiệu giải pháp hội nghị truyền hình Vũng Tàu',
                    description: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
                },
                {
                    src: IMAGES.DEFAULT_NEWS,
                    alt: 'giai-phap-hoi-nghi-truyen-hinh',
                    date: '17-10-2020',
                    type: 2,
                    label: 'Giới thiệu giải pháp hội nghị truyền hình Vũng Tàu',
                    description: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
                },
                {
                    src: IMAGES.DEFAULT_NEWS,
                    alt: 'giai-phap-hoi-nghi-truyen-hinh',
                    date: '17-10-2020',
                    type: 2,
                    label: 'Giới thiệu giải pháp hội nghị truyền hình Vũng Tàu',
                    description: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
                },
            ]
        }
    ];

    const DATANOIBAT = [
        {
            group: [
                {
                    src: IMAGES.DEFAULT_NEWS,
                    alt: 'giai-phap-hoi-nghi-truyen-hinh',
                    date: '17-10-2020',
                    type: 1, // tin cong nghe
                    label: 'Giới thiệu giải pháp hội nghị truyền hình Vũng Tàu',
                    description: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
                },
                {
                    src: IMAGES.DEFAULT_NEWS,
                    alt: 'giai-phap-hoi-nghi-truyen-hinh',
                    date: '17-10-2020',
                    type: 1,
                    label: 'Giới thiệu giải pháp hội nghị truyền hình Vũng Tàu',
                    description: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
                },
            ]
        },
        {
            group: [
                {
                    src: IMAGES.DEFAULT_TECHNEWS,
                    alt: 'giai-phap-hoi-nghi-truyen-hinh',
                    date: '17-10-2020',
                    type: 2,
                    label: 'Giới thiệu giải pháp hội nghị truyền hình Vũng Tàu',
                    description: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
                },
                {
                    src: IMAGES.DEFAULT_TECHNEWS,
                    alt: 'giai-phap-hoi-nghi-truyen-hinh',
                    date: '17-10-2020',
                    type: 2,
                    label: 'Giới thiệu giải pháp hội nghị truyền hình Vũng Tàu',
                    description: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
                },
            ]
        },
    ]

    const [dataNews, setDataNews] = useState(DATANEWS[0].group);
    const [dataNewsNoiBat, setDataNewsNoiBat] = useState(DATANOIBAT[0].group);
    // const [active, setActive] = useState(0);
    // const { t } = useTranslation();
    
    function handleData(x){
        setDataNews(DATANEWS[x].group);
        setDataNewsNoiBat(DATANOIBAT[x].group);
    }

    return (
        <Row>
            <Col className="news">
                {/* BANNER */}
                <div className="news_banner">
                    <img src={IMAGES.BANNER}/>
                </div>

                {/* NEWS GROUPS */}
                <Row className="news__info-container">
                    <Col lg={6} md={6} className="news__info-tab-event" onClick={() => handleData(0)}>Tin tức sự kiện</Col>
                    <Col lg={6} md={6} className="news__info-tab-tech" onClick={() => handleData(1)}>Tin tức công nghệ</Col>
                    {
                        dataNewsNoiBat && <GroupNewNoiBat data={dataNewsNoiBat}/>
                    }
                    {
                        dataNews && <GroupNews data={dataNews}/>
                    }
                </Row>
            </Col>
        </Row>
    );
}
export default News
