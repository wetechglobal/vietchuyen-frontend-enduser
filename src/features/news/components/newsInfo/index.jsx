import React, { useState } from 'react';
import { Tabs, Tab} from 'react-bootstrap';
import SubTabEventNews from '../subTabEventNews';
import SubTabTechNews from '../subTabTechNews';

const NewsInfo = () => {
    const [key, setKey] = useState('event-news');

    return (
        <Tabs id="tabs-info-container" activeKey={key} onSelect={(k) => setKey(k)}>
            <Tab eventKey="event-news" title="Tin tức sự kiện">
                <SubTabEventNews />
            </Tab>
            <Tab eventKey="tech-news" title="Tin tức công nghệ">
                <SubTabTechNews />
            </Tab>
        </Tabs>
    );
}

export default NewsInfo;