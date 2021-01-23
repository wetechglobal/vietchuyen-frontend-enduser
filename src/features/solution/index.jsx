
import { Row, Col } from 'react-bootstrap';
import './style.scss';
import 'react-multi-carousel/lib/styles.css';
import React from "react";
import IMAGES from "assets/images/images";
import Solutiondiamond from './Content-solution/index';
import { useTranslation } from 'react-i18next';
import Carouselcustom from './Custom/carouselcustom'
import CarouselcustomProject from './Custom/carouselcustomProject'
import Solution from '../../../src/common/solution/index';
const SolutionPage = () => {
    const { t } = useTranslation();
    return (
        <Row className="Page-Solution">
            <Col className="news">
                {/* BANNER */}
                <div className="news__banner_1st">
                    <img src={IMAGES.BANNERSOLUTION} alt="" />
                </div>
                <Col className="background-solution">
                    <Row className="latest-Solution1">
                        <Col md={8} className="title-solution">
                            <p>{t('Solution.title')}</p>
                            </Col>
                        {/* <Solution className="title-banner-solution" diamondresearch={t('Solution.title')} backgroundcolor='#F5F5F5'/> */}
                        <Solution backgroundcolor='#F5F5F5'/>
                    </Row>
                    <div className="news__banner_2nd">
                        <img src={IMAGES.DOITAC} alt="" /></div>
                    <Col className="container-part2">
                        <Col md={12} className="title-solution-sd">{t('Solution.titlecustomer')}</Col>
                        <Row className="latest-Solution">
                            <Col md={12} className="detail-Solution" >
                                <div className="detail-solution-content">
                                    <p>{t('Solution.solutioncontent')}</p>
                                    <p>{t('Solution.solutioncontentsd')}</p>
                                </div>
                            </Col>
                        </Row>
                        <Carouselcustom />
                        <Col className="general-content-part2">
                            <Row className="tittle-part2">
                                <Row className="latest-Solution">
                                    <Col md={12} className="title-solution-sd-2nd">{t('Solution.titleproject')}</Col>
                                </Row>
                            </Row>
                            <CarouselcustomProject />
                        </Col>
                    </Col>
                </Col>
            </Col>
        </Row>
    );
}
export default SolutionPage
