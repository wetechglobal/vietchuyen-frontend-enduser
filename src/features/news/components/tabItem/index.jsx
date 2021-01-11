import React from 'react';
import { Col } from 'react-bootstrap';
import './style.scss';

const TabItem = ({title, onItemClicked, isActive}) => {
    return (
        <Col className={isActive ? "news__tab news__tab--active" : "news__tab"} onClick={onItemClicked}>
            <span>{title}</span>
        </Col>
    );
}

export default TabItem;
