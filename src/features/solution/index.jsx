import { Row, Col } from 'react-bootstrap';
import './style.scss';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from "react";
import CLIENTS from "assets/images/client-logo/client";
import IMAGES from "assets/images/images";
import { useTranslation } from 'react-i18next';
import Solution from '../../../src/common/solution/index';
import Marquee from 'common/marquee';
import { getAllOurProjectsAction } from './project/ourProjectAction';
import Moment from 'moment';

const SolutionPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1)
  const strNow = Moment(today).format('YYYYMMDD');
  const strYesterday = Moment(yesterday).format('YYYYMMDD');

  // Project
  const [project, setProject] = useState('');
  const [projectArray, setProjectArray] = useState([]);
  const getAllProjects = useSelector(state => {
    return state.ourProjectGetAllReducer;
  });

  useEffect(() => {
    const language = localStorage.getItem('i18nextLng') === 'en' ? 'en' : 'vi';

    const textProject = language === 'vi' ? 'projectVi' : 'projectEn';
    setProject(textProject);
    if (sessionStorage.getItem(textProject) === null) {
      dispatch(getAllOurProjectsAction(language));
    }
    else {
      setProjectArray(JSON.parse(sessionStorage.getItem(textProject)));
    }

  }, [dispatch, localStorage.getItem('i18nextLng')]);

  //project
  if (getAllProjects?.responseData?.data?.records.length > 0) {
    //set data to projectArray if session is null
    if (sessionStorage.getItem(project) === null) {
      setProjectArray(getAllProjects.responseData.data.records);
    }

    //set projectArray new to localStorage
    if (localStorage.getItem(project + strNow) === null) {
      localStorage.setItem(project + strNow, JSON.stringify(getAllProjects.responseData.data.records));
    }

    //set projectArray old from localStorage
    if (localStorage.getItem(project + strYesterday) !== null) {
      localStorage.removeItem(project + strYesterday);
    }

    //set projectArray data to session if session is null
    if (sessionStorage.getItem(project) === null && projectArray.length > 0) {
      sessionStorage.setItem(project, JSON.stringify(getAllProjects.responseData.data.records));
    }
  }

  //if server error and projectArray on localStorage have data
  if (getAllProjects?.isError === true) {
    if (localStorage.getItem(project + strNow) !== null && sessionStorage.getItem(project) === null) {
      setProjectArray(JSON.parse(localStorage.getItem(project + strNow)));
      sessionStorage.setItem(project, localStorage.getItem(project + strNow));
    }
  }

  const CUSTOMER = [
    {
      "color": ["linear-gradient(#0063B0, #008CF8)"],
      "title": t('solution.finance'),
      "cardimg": IMAGES.TAICHINH,
      "projectNum": "40",
      "value": "60",
      dsLogo: [
        CLIENTS.BIDV,
        CLIENTS.EXIMBANK,
        CLIENTS.VIETBANK,
        CLIENTS.ACB,
        CLIENTS.CATHAYLIFE
      ]
    },
    {
      "color": ["linear-gradient(#FF2700, #D20311, #BA0707)"],
      "title": t('solution.electric'),
      "cardimg": IMAGES.DIENLUC,
      "projectNum": "20",
      "value": "100",
      dsLogo: [
        CLIENTS.EXIMBANK,
        CLIENTS.ACB,
        CLIENTS.EVN,
        CLIENTS.EXIMBANK,
        CLIENTS.ACB,
      ]
    },
    {
      "color": ["linear-gradient(#0063B0, #008CF8)"],
      "title": t('solution.business'),
      "cardimg": IMAGES.TAICHINH,
      "projectNum": "20",
      "value": "10",
      dsLogo: [
        CLIENTS.EXIMBANK,
        CLIENTS.ACB,
        CLIENTS.EVN,
      ]
    },
    {
      "color": ["linear-gradient(#FF2700, #D20311, #BA0707)"],
      "title": t('solution.police'),
      "cardimg": IMAGES.CONGAN,
      "projectNum": "3",
      "value": "20",
      dsLogo: [
        CLIENTS.EXIMBANK,
        CLIENTS.ACB,
        CLIENTS.EVN,
        CLIENTS.ACB,
        CLIENTS.BIDV,
      ]
    }
  ];

  const row = [];
  row.push(<div className="detail-solution-content">
    <p>{t('solution.solutioncontent')}</p>
    <p>{t('solution.solutioncontentsd')}</p>
  </div>)

  return (
    <Row className="page-solution">
      <Col className="solution-prod">
        <div className="solution-banner">
          <img src={IMAGES.BANNERSOLUTION} alt="" />
        </div>
        <Col className="background-solution">
          <Row className="latest-Solution">
            <Col md={8} className="title-solution">
              <p>{t('solution.title')}</p>
            </Col>
            <Solution hiddensolution='hidden' backgroundcolor='#F5F5F5' />
          </Row>
          <div className="banner">
            <img src={IMAGES.DOITAC} alt="" /></div>
          <Col className="content-prod">
            <Marquee title={t('solution.titlecustomer')} datas={CUSTOMER} text={row} type="customer"/>
            <Col className="general-content">
              <Marquee title={t('solution.titleproject')} datas={projectArray} type="project" />
            </Col>
          </Col>
        </Col>
      </Col>
    </Row>
  );
}
export default SolutionPage