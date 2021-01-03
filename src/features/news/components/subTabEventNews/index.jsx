import React from 'react';
import { Col } from 'react-bootstrap';

const SubTabEventNews = () => {
    const latestNews = [
        {
            id: 1,
            alt: 'giai-phap-hoi-nghi-truyen-hinh',
            type: 'Tin sự kiện',
            label: 'Giới thiệu giải pháp hội nghị truyền hình Vũng Tàu',
            description: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
        },
    ];

    return (
        <div>
            <div className="highlights">
                <div className="highlight-items">A</div>
                <div className="highlight-items">B</div>
            </div>
            <div className="others">
                <div className="other-items">1</div>
                <div className="other-items">2</div>
                <div className="other-items">3</div>
                <div className="other-items">4</div>
                <div className="other-items">5</div>
                <div className="other-items">6</div>
            </div>
        </div>
    );
}

export default SubTabEventNews;