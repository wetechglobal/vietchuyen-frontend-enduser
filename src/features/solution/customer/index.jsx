import "react-multi-carousel/lib/styles.css";
import './style.scss';
import { Row, Col } from 'react-bootstrap';
import CountUp from "common/countup";
import { useTranslation } from 'react-i18next';

const CardCustom = (props) => {
    const { t } = useTranslation();
    const { colorBg, cardImg, cardContent, projectNum, projectValue, clientCustom } = props
    return (
        <div className="customer-item">
            <div className="card" style={{ backgroundImage: colorBg }}>
                <img src={cardImg} alt="" />
                <div className="content">{cardContent}</div>
                <div className="group_num">
                    <div className="num_plus first">
                        <CountUp point={projectNum} ext={<sup>+</sup>} />
                        <div className="name-under">{t('solution.project')}</div>
                    </div>
                    <div className="num_plus">
                        <CountUp point={projectValue} ext={<sup>+</sup>} />
                        <div className="name-under">{t('solution.value')}</div>
                    </div>
                </div>
                <Row className="content-icon">
                    {clientCustom.map((item, idx) =>
                        <Col key={idx} className="content-background-icon" md={3} >
                            <img className="icon" key={idx} src={item} alt="" />
                        </Col>)}
                </Row>
            </div>
        </div>
    )
}

export default CardCustom