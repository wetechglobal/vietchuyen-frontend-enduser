import { Row, Col } from 'react-bootstrap';
import './style.scss';
import 'react-multi-carousel/lib/styles.css';
import React, { useEffect }  from "react";
import { useDispatch, useSelector } from 'react-redux';
import CLIENTS from "assets/images/client-logo/client";
import IMAGES from "assets/images/images";
import { useTranslation } from 'react-i18next';
import Solution from '../../../src/common/solution/index';
import Marquee from 'common/marquee';
import { getAllSolutionsAction } from 'common/solution/solutionAction';
const SolutionPage = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const getAllSolutions = useSelector(state => {
      console.log('useSelector getAllUsers run!!!');
      return state.solutuionGetAllReducer;
    });

    useEffect(() => {
      console.log('useEffect run!!!');
      dispatch(getAllSolutionsAction());
    }, [dispatch]);

    const CUSTOMER = [
        {
          "color":["linear-gradient(#0063B0, #008CF8)"],
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
          "color":["linear-gradient(#FF2700, #D20311, #BA0707)"],
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
          "color":["linear-gradient(#0063B0, #008CF8)"],
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
          "color":["linear-gradient(#FF2700, #D20311, #BA0707)"],
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
      const PROJECT = [   
        {
            "titlemini": t('solution.electric'),
            "titlecolor": "mini-title",
            urlImg: [
                CLIENTS.ACB
            ],
            "color": ["linear-gradient(#FF2700, #D20311, #BA0707)"],
            "contenthead": t('solution.etctitle'),
            "contentMini": t('solution.etccontent', { returnObjects: true })
        },
        {
            "titlemini": t('solution.bank'),
            "titlecolor": "mini-title-blue",
            urlImg: [
                CLIENTS.EXIMBANK
            ],
            "color":["linear-gradient(#0063B0, #008CF8)"],
            "contenthead": t('solution.viettitle'),
            "contentMini": t('solution.vietcontent', { returnObjects: true })
        },
        {
            "titlemini": t('solution.electric'),
            "titlecolor": "mini-title",
            urlImg: [
                CLIENTS.ACB
              ],
            "color":["linear-gradient(#FF2700, #D20311, #BA0707)"],
            "contenthead": t('solution.etcmntitle'),
            "contentMini": t('solution.etcmncontent', { returnObjects: true })
          }
          ,
        {
            "titlemini": t('solution.bank'),
            "titlecolor":"mini-title-blue",
            urlImg: [
                CLIENTS.EXIMBANK
            ],
            "color":["linear-gradient(#0063B0, #008CF8)"],
            "contenthead": t('solution.acbtitle'),
            "contentMini": t('solution.acbcontent', { returnObjects: true })
        },
        {
            "titlemini": t('solution.electric'),
            "titlecolor":"mini-title",
            urlImg: [
                CLIENTS.ACB
              ],
            "color":["linear-gradient(#FF2700, #D20311, #BA0707)"],
            "contenthead": t('solution.etcbptitle'),
            "contentMini": t('solution.etcbpcontent', { returnObjects: true })
        },
        {
            "titlemini": t('solution.bank'),
            "titlecolor":"mini-title-blue",
            urlImg: [
                CLIENTS.EXIMBANK
            ],
            "color":["linear-gradient(#0063B0, #008CF8)"],
            "contenthead": t('solution.bidvtitle'),
            "contentMini": t('solution.didvcontent', { returnObjects: true })
        },
        {
            "titlemini": t('solution.electric'),
            "titlecolor": "mini-title",
            urlImg: [
                CLIENTS.ACB
              ],
            "color":["linear-gradient(#FF2700, #D20311, #BA0707)"],
            "contenthead": t('solution.etccttitle'),
            "contentMini": t('solution.etcctcontent', { returnObjects: true })
        },
        {
            "titlemini": t('solution.bank'),
            "titlecolor":"mini-title-blue",
            urlImg: [
              CLIENTS.EXIMBANK
            ],
            "color":["linear-gradient(#0063B0, #008CF8)"],
            "contenthead": t('solution.eximtitle'),
            "contentMini": t('solution.eximcontent', { returnObjects: true })
        },
        {
            "titlemini": t('solution.electric'),
            "titlecolor":"mini-title",
            urlImg: [
                CLIENTS.ACB
              ],
            "color":["linear-gradient(#FF2700, #D20311, #BA0707)"],
            "contenthead": t('solution.etcvltitle'),
            "contentMini": t('solution.etcvlcontent', { returnObjects: true })
        },
        {
            "titlemini": "SMB",
            "titlecolor":"mini-title-smb",
            urlImg: [
                CLIENTS.ACB
              ],
            "color":["linear-gradient(#FF2700, #D20311, #BA0707)"],
            "contenthead": t('solution.smbtitle'),
            "contentMini": t('solution.smbcontent', { returnObjects: true })
        }
      ];
    const row = [];
    row.push(<div className="detail-solution-content">
                <p>{t('solution.solutioncontent')}</p>
                <p>{t('solution.solutioncontentsd')}</p>
            </div>)
    console.log('getAllSolutions',getAllSolutions);
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
                        <Solution hiddensolution='hidden' backgroundcolor='#F5F5F5'/>
                    </Row>
                    <div className="banner">
                        <img src={IMAGES.DOITAC} alt="" /></div>
                    <Col className="content-prod">
                        <Marquee title={t('solution.titlecustomer')} datas={CUSTOMER} text={row} type="customer"/>
                        <Col className="general-content">
                            <Marquee title={t('solution.titleproject')} datas={PROJECT} type="project"/>
                        </Col>
                    </Col>
                </Col>
            </Col>
        </Row>
    );
}
export default SolutionPage