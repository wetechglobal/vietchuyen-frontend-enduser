/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import { Col, Row, Image } from 'react-bootstrap';
import TabItem from '../components/tabItem/index';
import HighlightNews from '../components/highlightNews/index';
import ListNews from '../components/listNews/index';
import IMAGES from "assets/images/images";
import dataNews from '../data/dataNews';
import dataHighlight from '../data/dataHighlight';
import './style.scss';

const dataTabs = [{id: 1, title: 'Tin tức sự kiện1111'}, {id: 2, title: 'Tin tức công nghệ111'}];

const Details = () => {
    const [dataType, setDataType] = useState(1);
    const [newsData, setNewsData] = useState([]);
    const [newsHighlightData, setNewsHighlightData] = useState([]);

    useEffect(() => {
        setNewsData(dataNews.filter(x => x.typeId === dataType));
        setNewsHighlightData(dataHighlight.filter(x => x.typeId === dataType));
    }, [dataType]);

    return (    
        <>  
            {/* --- BANNER --- */}
            <Row className="news__banner">
                <Image src={IMAGES.BANNER} className="news__banner--image"/>
            </Row>

            <Col className="news__col">
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

                <Row>
                    <HighlightNews data={newsHighlightData}/>
                    <ListNews data={newsData}/>
                </Row>

                <div className="news__row news__footer">
                    <span>XEM THÊM<br/>TIN TỨC11111111</span>
                    <div className="news__line" />
                </div>
            </Col>
        </>
    );
}
export default Details
