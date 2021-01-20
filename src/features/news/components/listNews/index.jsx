import { Col, Row } from 'react-bootstrap';
import ICONS from 'assets/icons/icons';
import NewsItem from 'common/newsitem';
import { useTranslation } from 'react-i18next';
import './style.scss';

const ListNews = (props) => {
    const { t } = useTranslation();

    const { data } = props;
    return <Row className="box-group">
    {
        data.map((item, idx) => {
            let lineTextColor = item.typeId === 1 ? 'red' : 'blue';
            let line = item.typeId === 1 ? ICONS.REDLINE : ICONS.BLUELINE;
            return <Col key={idx} lg={4} md={6}>
                <NewsItem 
                    lineTextColor={lineTextColor} 
                    lineSrc={line}
                    date={item.date} 
                    type={t(`${item.typeName}`)} 
                    title={t(`${item.title}`)}
                    description={t(`${item.description}`)}  
                    link={item.link}
                />
            </Col>
        })
    }
</Row>
}

export default ListNews
