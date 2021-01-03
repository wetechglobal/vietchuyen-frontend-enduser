
import { Row, Col } from 'react-bootstrap';
import  IMAGES from "assets/images/images";
import './style.scss';

const Solution = () => {

    return (
        <Row>
            <Col className="solutions">
                <div className="solution_banner">
                    <img src={IMAGES.SOLUTION_PRODUCT_BANNER}/>
                </div>
            </Col>
        </Row>
    );
}
export default Solution
