/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import { Col, Row, Image } from 'react-bootstrap';
import GroupNews from './components/groupNews/index';
import TabItem from './components/tabItem/index';
import GroupNewsHighlight from './components/groupNewsHighlight/index';
// import IMAGES from "assets/images/images";
import IMAGES from "../../assets/images/images";
import DATA_NEWS from './data/data_news';
import dataHightlight from './data/data_news_highlight';
import './style.scss';
// import { useTranslation } from 'react-i18next';

const dataTabs = [{id: 1, title: 'Tin tức sự kiện'}, {id: 2, title: 'Tin tức công nghệ'}];

const News = () => {
    const [dataType, setDataType] = useState(1);
    const [dataNews, setDataNews] = useState([]);

    useEffect(() => {
        setDataNews(DATA_NEWS.filter(x => x.type === dataType));
    }, [dataType]);

    return (    
        <>  
            {/* --- BANNER --- */}
            <Row className="news__banner">
                <Image src={IMAGES.BANNER} className="news__banner--image"/>
            </Row>

            {/* --- LIST --- */}
            <Col>
                {/* --- TABS --- */}
                <div className="news__row news__header">
                { 
                    dataTabs.map(({id,title}) => <TabItem 
                        key={id} 
                        title={title} 
                        onItemClicked={() => setDataType(id)} 
                        isActive={dataType === id} 
                    />) 
                }
                </div>

                <div className="news__row news__highlight">
                   <GroupNewsHighlight data={dataHightlight}/>
                </div>

                <div className="news__row news__list">
                    { dataNews && <GroupNews data={dataNews}/> }
                </div>

                <div className="news__row news__footer">
                    <span>XEM THÊM<br/>TIN TỨC</span>
                    <div className="news__line" />
                </div>
            </Col>
        </>
    );
}
export default News
