import { Col, Row } from 'react-bootstrap';
import ICONS from 'assets/icons/icons';
import NewsItem from 'common/newsitem';
import { useTranslation } from 'react-i18next';
import './style.scss';

const HighlightNews = (props) => {
    const { t } = useTranslation();

    const { data } = props;
    return <Row className="box-group">
    {
        data.map((item, idx) => {
            let lineTextColor = 'highlight';
            let line = ICONS.HIGHLIGHTLINE;
            return <Col key={idx} lg={6} md={6}>
                <NewsItem 
                    lineTextColor={lineTextColor} 
                    lineSrc={line}
                    date={item.date} 
                    type={t(`${item.typeName}`)} 
                    title={t(`${item.title}`)}
                    description={t(`${item.description}`)}  
                    link={item.link}
                    id={item.id}
                />
            </Col>
        })
    }
</Row>
}

export default HighlightNews;
