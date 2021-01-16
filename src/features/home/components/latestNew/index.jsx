import { Row, Col, Nav } from 'react-bootstrap';
import ICONS from 'assets/icons/icons';
import IMAGES from "assets/images/images";
import './style.scss';
import NewsItem from 'common/newsitem';
import { useTranslation } from 'react-i18next';

const LatestNews = () => {
    const { t } = useTranslation();
    const latestNews = [
        {
            link: IMAGES.DEFAULT_NEWS,
            alt: 'giai-phap-hoi-nghi-truyen-hinh',
            date: '17-10-2020',
            type: t('news.eventType'),
            title: t('news.title'),
            description: t('news.description'),
        },
        {
            link: IMAGES.DEFAULT_NEWS,
            alt: 'giai-phap-hoi-nghi-truyen-hinh',
            date: '17-10-2020',
            type: t('news.techType'),
            title: t('news.title'),
            description: t('news.description'),
        },
        {
            link: IMAGES.DEFAULT_NEWS,
            alt: 'giai-phap-hoi-nghi-truyen-hinh',
            date: '17-10-2020',
            type: t('news.eventType'),
            title: t('news.title'),
            description: t('news.description'),
        },
    ];
    return <Row className="box-group">
        {
            latestNews.map((item, idx) => {
                let lineTextColor = idx % 2 === 0 ? 'blue' : 'red';
                let line = idx % 2 === 0 ? ICONS.BLUELINE : ICONS.REDLINE;
                return <Col key={idx} lg={4} md={6}>
                    <NewsItem lineTextColor={lineTextColor} lineSrc={line}
                        date={item.date} type={item.type} title={item.title} description={item.description} link={item.link}/>
                </Col>
            })
        }
    </Row>
}

export default LatestNews
