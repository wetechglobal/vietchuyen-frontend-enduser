
import Card from 'react-bootstrap/Card';
import IMAGES from "assets/images/images";

const LatestNews = () => {
    const latestNews = [
        {
            src: IMAGES.DEFAULT_NEWS,
            alt: 'giai-phap-hoi-nghi-truyen-hinh',
            type: 'Tin sự kiện',
            label: 'Giới thiệu giải pháp hội nghị truyền hình Vũng Tàu',
            description: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
        },
        {
            src: IMAGES.DEFAULT_NEWS,
            alt: 'giai-phap-hoi-nghi-truyen-hinh',
            type: 'Tin công nghệ',
            label: 'Giới thiệu giải pháp hội nghị truyền hình Vũng Tàu',
            description: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
        },
        {
            src: IMAGES.DEFAULT_NEWS,
            alt: 'giai-phap-hoi-nghi-truyen-hinh',
            type: 'Tin trong nước',
            label: 'Giới thiệu giải pháp hội nghị truyền hình Vũng Tàu',
            description: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
        },
    ];
    return latestNews.map((item, idx) =>
        <Card key={idx} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.src} />
            <Card.Body>
                <Card.Title>{item.label}</Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default LatestNews
