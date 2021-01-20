
import "react-multi-carousel/lib/styles.css";
import './style.scss';
import { Row, Col } from 'react-bootstrap';

const CardCustomProject = (props) => {
    const { imge, miniTitle, contentheader, contentmini1, minititlecolor } = props

    return (
        <div className="general-content-part2">
            <div className="card-part2">
                <div className={minititlecolor}>{miniTitle}</div>
                <div className="background-img-part2">
                    <img className="card-img-part2" src={imge} alt="" />
                </div>
                <Row>
                    <Col md={1} ></Col>
                    <Col className="header-content" md={11}>{contentheader}</Col>
                </Row>
                <Row className="header-content-mini">
                    <Col md={2} className="header-content-arrow">&gt;</Col>
                    <Col className="header-content-link" md={10}>{contentmini1}</Col>
                </Row>
            </div>
        </div>
    )
}

export default CardCustomProject