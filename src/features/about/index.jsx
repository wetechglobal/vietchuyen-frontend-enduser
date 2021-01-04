
import { Row, Col } from 'react-bootstrap';
import IMAGES from "assets/images/images";
import ICONS from "assets/icons/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './familyTree.scss';
import './style.scss';

const About = () => {

    return (
        <Row>
            <Col xs={12} className="about">
                <Row className="text-about">
                    <Col xs={{ span: 6, offset: 2 }}>
                        <div className="open-letter">THƯ NGỎ</div>
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
                            <img src={IMAGES.MISSION} width="100%" alt="mission" />
                        </Col>
                        <Col xs={{ span: 3, offset: 1 }}>
                            <div className="title-about blue">SỨ MỆNH</div>
                            <div className="detail-about">
                                Không ngừng đổi mới và sáng tạo để khẳng định sự khác biệt, đồng thời trân trọng và đề cao con người, bồi dưỡng nguồn nhân lực nhằm đáp ứng ngày một tốt hơn những yêu cầu của khách hàng, những biến chuyển của thị trường, nâng cao giá trị sản phẩm dịch vụ.
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{ span: 3, offset: 2 }}>
                            <div className="title-about red">TẦM NHÌN</div>
                            <div className="detail-about">
                                Không ngừng đổi mới và sáng tạo để khẳng định sự khác biệt, đồng thời trân trọng và đề cao con người, bồi dưỡng nguồn nhân lực nhằm đáp ứng ngày một tốt hơn những yêu cầu của khách hàng, những biến chuyển của thị trường, nâng cao giá trị sản phẩm dịch vụ.
                            </div>
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
                <Row className="site-map">
                    <Col xs={12} className="text-center">
                        {/* <svg className="box-cctc">
                            <polygon points="0,400 100,300 700,300 1000,0 1000,1900 800,2100 250,2100 0,2333"
                                style={{ stroke: 'black', 'strokeWidth': 1, 'fill': '#008CF8' }} />
                                Sorry, your browser does not support inline SVG.
                        </svg> */}
                        <div className="open-letter">Cơ cấu tổ chức</div>
                        <p>Cơ cấu tổ chức của Việt Chuyên SG được chia thành các nhóm chức năng chuyên môn,<br />nhằm phục vụ tốt nhất cho nhu cầu của khách hàng.</p>
                        <br /><br />
                        <div className="tree-map mgBottom70">

                            <Row>
                                <Col md={{ span: 8, offset: 4 }}>
                                    <div className="node white-node txt-uppercase">
                                        <p>Hội đồng thành viên</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{ span: 3, offset: 4 }}>
                                    <div className="node white-node txt-uppercase arrowDownLarge arrowRight">
                                        <p>Giám đốc điều hành</p>
                                        <FontAwesomeIcon icon={faChevronDown} />
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </div>
                                </Col>
                                <Col md={5}>
                                    <div className="node light-green-node txt-uppercase">
                                        <p>P. Nghiên cứu & Phát triển</p>
                                    </div>
                                </Col>
                            </Row>
                            <div className="limit-row">
                                <Row className="wrapper-3 fix-wrapper-3">
                                    <Col md={{ span: 3, offset: 1 }}>
                                        <div className="node blue-node txt-uppercase verticalLine arrowDown">
                                            <p>Phó GĐ Kinh doanh</p>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>
                                        <div className="node blue-node node-child arrowDownSmall">
                                            <p>Phòng Dự án</p>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </div>
                                        <div className="node blue-node node-child arrowDownSmall"><p>Phòng Marketing</p><FontAwesomeIcon icon={faChevronRight} /></div>
                                        <div className="node blue-node node-child arrowDownSmall"><p>Phòng Kinh doanh</p><FontAwesomeIcon icon={faChevronRight} /></div>
                                    </Col>
                                    <Col md={{ span: 3, offset: 0 }}>
                                        <div className="node yellow-node txt-uppercase verticalLine child-2 arrowDownLarge topOther">
                                            <p>Phó GĐ Điều hành</p>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>
                                        <div className="node yellow-node node-child arrowDownSmall"><p className="multiple-line">P. Kỹ thuật lắp đặt<br />và dịch vụ hậu mãi</p><FontAwesomeIcon icon={faChevronRight} /></div>
                                        <div className="node yellow-node node-child arrowDownSmall"><p>P. Hành chính & Nhân sự</p><FontAwesomeIcon icon={faChevronRight} /></div>
                                    </Col>
                                    <Col md={{ span: 5, offset: 0 }}>
                                        <div className="node red-node txt-uppercase verticalLine arrowDown">
                                            <p>TP. Kế toán - Tài chính</p>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>
                                        <div className="node red-node node-child arrowDownSmall"><p>Kế toán tổng hợp</p><FontAwesomeIcon icon={faChevronRight} /></div>
                                        <div className="node red-node node-child arrowDownSmall"><p>Kế toán thanh toán</p><FontAwesomeIcon icon={faChevronRight} /></div>
                                        <div className="node red-node node-child arrowDownSmall"><p>Kế toán vật tư</p><FontAwesomeIcon icon={faChevronRight} /></div>
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
                            <Col sm={4}><div className="number blue">30+</div><b>Nhân viên</b></Col>
                            <Col sm={4}><div className="number dark-orange">15+</div><b>Kỹ sư/Chuyên gia công nghệ</b></Col>
                            <Col sm={4}><div className="number green">10+</div><b>Chuyên viên kinh doanh</b></Col>
                        </Row>
                        <Row>
                            <Col sm={4}><div className="number red">60%</div><b>Đại học & Cao đẳng</b></Col>
                            <Col sm={4}><div className="number light-blue">30%</div><b>Trung cấp/ Kỹ thuật</b></Col>
                            <Col sm={4}><div className="number orange">10%</div><b>Trình độ khác</b></Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row >
    );
}
export default About
