
import { Row, Col } from 'react-bootstrap';
import IMAGES from "assets/images/images";
import ICONS from "assets/icons/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';
import './style.scss';
import CountUp from '../../common/countup/index'

const About = () => {
    const { t } = useTranslation();

    return (
        <Row>
            <Col xs={12} className="about">
                <Row className="text-about text-justify">
                    <Col xs={{ span: 6, offset: 2 }}>
                        <div className="open-letter">{t('about.openLetter')}</div>
                        {parse(t('about.content'))}
                    </Col>
                </Row>
                <div className="contain-about">
                    <Row>
                        <Col lg={{ span: 4, offset: 2 }}>
                            <img src={IMAGES.MISSION} width="100%" alt="mission" />
                        </Col>
                        <Col xs={{ span: 3, offset: 1 }}>
                            <div className="title-about blue">{t('about.titleMission')}</div>
                            <div className="detail-about">{t('about.contentMission')}</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{ span: 3, offset: 2 }}>
                            <div className="title-about red">{t('about.titleVision')}</div>
                            <div className="detail-about">{t('about.contentVision')}</div>
                        </Col>
                        <Col lg={{ span: 4, offset: 1 }}>
                            <img src={IMAGES.VISION} width="100%" alt="vision" />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 4, offset: 2 }}>
                            <img src={IMAGES.CORE_VALUE} width="100%" alt="core-value" />
                        </Col>
                        <Col xs={{ span: 3, offset: 1 }}>
                            <div className="title-about blue">{t('about.titleCoreValue')}</div>
                            <div className="detail-about">{t('about.contentCoreValue')}</div>
                            <div className="title-small-about red">{t('about.loganCoreValue')}</div>
                            <div className="detail-about">{t('about.detailCoreValue')}</div>
                        </Col>
                    </Row>
                </div>
                <Row className="site-map">
                    <Col xs={12} className="text-center">
                        {/* <svg className="box-cctc">
                            <polygon points="0,400 100,300 700,300 1000,0 1000,1900 800,2100 250,2100 0,2333"
                                style={{ stroke: 'black', 'strokeWidth': 1, 'fill': '#008CF8' }} />
                                Sorry, your browser does not support inline SVG.
                        </svg> */}
                        <div className="open-letter">{t('about.orgStruct')}</div>
                        <p>{parse(t('about.detailOrgStruct'))}</p>
                        <br /><br />
                        <div className="tree-map mgBottom70">

                            <Row>
                                <Col md={{ span: 8, offset: 4 }}>
                                    <div className="node white-node txt-uppercase">
                                        <p>{t('about.councilMember')}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{ span: 3, offset: 4 }}>
                                    <div className="node white-node txt-uppercase arrowDownLarge arrowRight">
                                        <p>{t('about.CEO')}</p>
                                        <FontAwesomeIcon icon={faChevronDown} />
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </div>
                                </Col>
                                <Col md={5}>
                                    <div className="node light-green-node txt-uppercase">
                                        <p>{t('about.researchDevelopment')}</p>
                                    </div>
                                </Col>
                            </Row>
                            <div className="limit-row">
                                <Row className="wrapper-3 fix-wrapper-3">
                                    <Col md={{ span: 3, offset: 1 }}>
                                        <div className="node blue-node txt-uppercase verticalLine arrowDown">
                                            <p>{t('about.deputySD')}</p>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>
                                        <div className="node blue-node node-child arrowDownSmall">
                                            <p>{t('about.projectDepartment')}</p>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </div>
                                        <div className="node blue-node node-child arrowDownSmall"><p>{t('about.marketingDepartment')}</p><FontAwesomeIcon icon={faChevronRight} /></div>
                                        <div className="node blue-node node-child arrowDownSmall"><p>{t('about.salesDepartment')}</p><FontAwesomeIcon icon={faChevronRight} /></div>
                                    </Col>
                                    <Col md={{ span: 3, offset: 0 }}>
                                        <div className="node yellow-node txt-uppercase verticalLine child-2 arrowDownLarge topOther">
                                            <p>{t('about.deputyCEO')}</p>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>
                                        <div className="node yellow-node node-child arrowDownSmall">
                                            <p className="multiple-line">{parse(t('about.technicalDepartment'))}</p>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            </div>
                                        <div className="node yellow-node node-child arrowDownSmall"><p>{t('about.hrDepartment')}</p><FontAwesomeIcon icon={faChevronRight} /></div>
                                    </Col>
                                    <Col md={{ span: 5, offset: 0 }}>
                                        <div className="node red-node txt-uppercase verticalLine arrowDown">
                                            <p>{t('about.faDepartment')}</p>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>
                                        <div className="node red-node node-child arrowDownSmall"><p>{t('about.faSumDepartment')}</p><FontAwesomeIcon icon={faChevronRight} /></div>
                                        <div className="node red-node node-child arrowDownSmall"><p>{t('about.faPayDepartment')}</p><FontAwesomeIcon icon={faChevronRight} /></div>
                                        <div className="node red-node node-child arrowDownSmall"><p>{t('about.faMaterialDepartment')}</p><FontAwesomeIcon icon={faChevronRight} /></div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} className="percent text-center">
                        <img src={ICONS.ORG_STRUCT} width="471" alt="org-structure" className="org-structure" />
                    </Col>
                    <Col sm={12} className="org-number">
                        <Row>
                            <Col sm={4} className="blue"><div className="number blue"><CountUp point={30} ext="+"/></div><b>{t('about.employee')}</b></Col>
                            <Col sm={4} className="dark-orange"><div className="number dark-orange"><CountUp point={15} ext="+"/></div><b>{t('about.engineer')}</b></Col>
                            <Col sm={4} className="green"><div className="number green"><CountUp point={10} ext="+"/></div><b>{t('about.business')}</b></Col>
                        </Row>
                        <Row>
                            <Col sm={4} className="red"><div className="number red"><CountUp point={60} ext="%"/></div><b>{t('about.college')}</b></Col>
                            <Col sm={4} className="light-blue"><div className="number light-blue"><CountUp point={30} ext="%"/></div><b>{t('about.intermediate')}</b></Col>
                            <Col sm={4} className="orange"><div className="number orange"><CountUp point={10} ext="%"/></div><b>{t('about.otherLevel')}</b></Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row >
    );
}
export default About
