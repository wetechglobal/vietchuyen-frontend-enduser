import "react-multi-carousel/lib/styles.css";
import './style.scss';
import { Row, Col } from 'react-bootstrap';
import IMAGES from "assets/images/images";
import CLIENT from 'assets/images/client-logo/client';
const CardCustom = (props) => {
    const { colorbg, cardimg, linecolor, cardcontent, clientcustom, totalnumber, countnumber } = props
    const dienluc = [
        { dienluc: CLIENT.ACB },
        { dienluc: CLIENT.BIDV },
        { dienluc: CLIENT.CAVN },
        { dienluc: CLIENT.ACB },
        { dienluc: CLIENT.BIDV },
        { dienluc: CLIENT.CAVN },
    ]
    return (
        <div className="card" style={{ backgroundImage: colorbg }}>
            <div className={cardimg}></div>
            <div className="card-content">{cardcontent}</div>
            <div className="container1">
                <div className="group_red">
                    <div className={linecolor}>
                        <img className="image_number-left" src={IMAGES.SIX} alt="" />
                    </div>
                    <div className="num_red_2">
                        <img className="image_number-right" src={IMAGES.TWENTY} alt="" />
                    </div>
                </div>
                <Row>
                    <Col md={6}>
                        <div className="name-under">dự án</div>
                    </Col>
                    <Col md={6}>
                        <div className="name-under">Tỷ tổng giá trị đầu tư</div>
                    </Col>
                </Row>
            </div>
            <Row className="content-icon">
                {/*  */}
                {dienluc.map((item, idx) =>
                    <Col className="content-background-icon" md={3} >
                        <img className="icon_1" key={idx} src={item.dienluc} alt="" />
                    </Col>)}
            </Row>
        </div>
    )
}

export default CardCustom