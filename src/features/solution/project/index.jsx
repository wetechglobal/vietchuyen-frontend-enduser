
import "react-multi-carousel/lib/styles.css";
import './style.scss';
import { Row, Col } from 'react-bootstrap';

const CardProject = (props) => {
    const { imge, miniTitle, contentheader, contentmini, minititlecolor } = props

    return (
        <div className="project-item">
            <div className="card">
                <div className={minititlecolor}>{miniTitle}</div>
                <div className="background-img-part2">
                    <img className="card-img-part2" src={imge} alt="" />
                </div>
                <div className="header-content" md={11}>{contentheader}</div>
                {contentmini.map((item, idx) =>
                    <Row key={idx} className="header-content-mini">
                        <Col md={1} className="header-content-arrow">&gt;</Col>
                        <Col className="header-content-link" md={11}>{item}</Col>
                    </Row>)}
            </div>
        </div>
    )
}

export default CardProject