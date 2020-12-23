
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
const TheHeader = () => {

    return (
        <Row>
            <Col className="header">
                <div>LOGO</div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Trang chủ</Link>
                        </li>
                        <li>
                            <Link to="/about">Về việt Chuyên</Link>
                        </li>
                        <li>
                            <Link to="/solution">Giải Pháp - Sản Phẩm</Link>
                        </li>
                        <li>
                            <Link to="/news">Tin Tức</Link>
                        </li>
                        <li>
                            <Link to="/contact">Liên Hệ</Link>
                        </li>
                    </ul>
                </nav>
            </Col>
        </Row>
    );
}
export default TheHeader
