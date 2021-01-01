
import { Row, Col } from 'react-bootstrap';
import IMAGES from "assets/images/images";

import './style.scss';

const About = () => {

    return (
        <Row>
            <Col lg={12} className="about">
                <Row className="text-about">
                    <Col lg={{ span: 6, offset: 2 }}>
                        <h1>THƯ NGỎ</h1>
                        <h1>Quý khách hàng, đối tác thân mến!</h1>
                        <p>Việt Chuyên SG là Nhà Cung cấp các giải pháp & sản phẩm cơ sở hạ tầng hệ thống CNTT tại Việt Nam.Với kinh nghiệm hơn 10 năm trong ngành Công nghệ thông tin tại Việt Nam, Việt Chuyên SG luôn cam kết làm việc theo phương châm “Chất lượng- Uy tín – Chuyên nghiệp – Sáng tạo – Nỗ lực không ngừng”, từ đó đề xuất những phương án hướng tới sự phát triển lâu dài, cung cấp tới các khách hàng những sản phẩm, dịch vụ CNTT tốt nhất. Chính vì thế, từ thương hiệu ít được biết đến, Viet Chuyen SG đã xây dựng tên tuổi thành công và tạo được dấu ấn rất riêng.</p>
                        <p>“Thành công đến từ sự chân thành là thành công bền vững nhất” và không tài sản nào giá trị hơn việc khách hàng biết đến thương hiệu của mình.Có được những thành quả đó không thể không nhắc đến sự ủng hộ và tin tưởng của Quý khách hàng, đối tác.</p>
                        <p>Mặc dù giai đoạn mới có nhiều thách thức, khó khăn nhưng cũng mang đến vô số cơ hội. Chính vì vậy chúng tôi mong muốn sẽ nhận được sự ủng hộ nhiều hơn nữa từ quý khách hàng, đối tác để cùng nhau tạo ra những giá trị tốt đẹp trong thời đại 4.0. Thay mặt Viet Chuyen SG, tôi xin chân thành gửi lời cảm ơn đến toàn thể quý vị. Cảm ơn các bạn đã đồng hành cũng chúng tôi thắp sáng lên ngọn lửa Viet Chuyen SG – ngọn lửa của niềm tin, sức mạnh đoàn kết và lòng nhiệt huyết.</p>
                        <p>Trân trọng!</p>
                        <p>Tổng Giám Đốc Việt Chuyên SG</p>
                    </Col>
                </Row>
                <div className="contain-about">
                    <Row>
                        <Col lg={{ span: 4, offset: 2 }}>
                            <img src={IMAGES.MISSION} width="577" alt="mission" />
                        </Col>
                        <Col lg={{ span: 3, offset: 1 }}>
                            <div className="title-about blue">SỨ MỆNH</div>
                            <div className="detail-about">
                                Không ngừng đổi mới và sáng tạo để khẳng định sự khác biệt, đồng thời trân trọng và đề cao con người, bồi dưỡng nguồn nhân lực nhằm đáp ứng ngày một tốt hơn những yêu cầu của khách hàng, những biến chuyển của thị trường, nâng cao giá trị sản phẩm dịch vụ.
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 3, offset: 2 }}>
                            <div className="title-about red">TẦM NHÌN</div>
                            <div className="detail-about">
                                Không ngừng đổi mới và sáng tạo để khẳng định sự khác biệt, đồng thời trân trọng và đề cao con người, bồi dưỡng nguồn nhân lực nhằm đáp ứng ngày một tốt hơn những yêu cầu của khách hàng, những biến chuyển của thị trường, nâng cao giá trị sản phẩm dịch vụ.
                            </div>
                        </Col>
                        <Col lg={{ span: 6, offset: 1 }}>
                            <img src={IMAGES.VISION} width="577" alt="vision" />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 4, offset: 2 }}>
                            <img src={IMAGES.CORE_VALUE} width="577" alt="core-value" />
                        </Col>
                        <Col lg={{ span: 3, offset: 1 }}>
                            <div className="title-about blue">GIÁ TRỊ CỐT LỖI</div>
                            <div className="detail-about">
                                Hơn 10 năm qua, đội ngũ cán bộ nhân viên Viet Chuyen SG luôn cam kết làm việc theo phương châm:
                        </div>
                            <div className="title-small-about red">“Chất lượng - Uy tín – Chuyên nghiệp – Sáng tạo – Nỗ lực không ngừng”</div>
                            <div className="detail-about">
                                Luôn luôn đề xuất những phương án hướng tới sự phát triển lâu dài nhằm cung cấp các sản phẩm, dịch vụ CNTT chất lượng cao đến các khách hàng.
                        </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
}
export default About
