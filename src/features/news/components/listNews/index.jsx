import { Col, Row } from 'react-bootstrap';
import ICONS from 'assets/icons/icons';
import NewsItem from 'common/newsitem';
import './style.scss';
import config from 'common/config';

const ListNews = (props) => {
    const { data } = props;
    return <Row className="box-group">
    {
        data?.map((item, idx) => {
            let lineTextColor = item.typeId === 1 ? 'red' : 'blue';
            let line = item.typeId === 1 ? ICONS.REDLINE : ICONS.BLUELINE;
            return <Col key={idx} lg={4} md={6}>
                <NewsItem 
                    lineTextColor={lineTextColor} 
                    lineSrc={line}
                    date={item.dateTimeCreate} 
                    type={item.categoryName} 
                    title={item.name}
                    description={item.shortDescription}  
                    link={config.HOST + item.thumbnail}
                />
            </Col>
        })
    }
</Row>
}

export default ListNews
