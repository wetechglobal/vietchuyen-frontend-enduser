
import { Row, Col } from 'react-bootstrap';
import './style.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from "react";
import IMAGES from "assets/images/images";
import Solution1 from './Content-solution/index';
import "react-multi-carousel/lib/styles.css";
// import { useTranslation } from 'react-i18next';
// import Carousel from 'react-bootstrap/Carousel'
// import Module from '../home/components/module/module.jsx'

const Solution = () => {
    // const { t } = useTranslation();
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 20 // this is needed to tell the amount of px that should be visible.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 20 // this is needed to tell the amount of px that should be visible.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 20 // this is needed to tell the amount of px that should be visible.
        }
    }

    return (
        <Row>
            <Col className="news">
                {/* BANNER */}
                <div className="news__banner_1st">
                    <img src={IMAGES.BANNERSOLUTION} alt="" />
                </div>

                <Col className="background">

                    <Row className="latest-Solution1">

                        <Col md={8} className="title-solution">
                            <p>Chúng Tôi Cung Cấp</p></Col>

                        <Solution1 />
                    </Row>
                    <div className="news__banner">
                        <img src={IMAGES.DOITAC} alt="" />
                    </div>
                    <Col className="container-part2">
                        <Col md={12} className="title-solution-sd">Khách Hàng Tiêu Biểu</Col>
                        <Row className="latest-Solution">
                            <Col md={12} className="detail-Solution" >

                                <div className="detail-solution-content">
                                    <p>   Hiện nay Việt Chuyên SG được nhìn nhận là công ty phân phối sản phẩm và giải pháp về cấu trúc hạ tầng mạng CNTT - VT chuyên nghiệp và các giải pháp công nghệ tiên tiến, các sản phẩm nguồn cho hạ tầng trung tâm cơ sở dữ liệu data center, hệ thống quản trị tòa nhà thông minh, Viễn thông – BTS,….
                            </p>
                                    <p>     Với kinh nghiệm tham gia vào nhiều dự án lớn tiêu biểu trong tất cả lĩnh vực, bao gồm: Chính phủ, Tài chính-Ngân hàng, Dầu khí, Cao ốc thương mại, Giáo dục, Cơ điện và Viễn thông…. cùng sự tín nhiệm cao của nhiều khách hàng, Việt Chuyên SG cam kết đáp ứng đầy đủ các sản phẩm và giải pháp tiên tiến nhất hiện nay theo xu hướng phát triển chung của Việt Nam, đặc biệt trong ngành Viễn thông - Công nghệ Thông tin.
                            </p>
                                </div>
                            </Col>
                        </Row>
                        <Carousel className="carousel-res"

                            swipeable={true}
                            draggable={true}
                            //   showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlay={true}
                            //   focusOnSelect={true}
                            arrows={false}
                            autoPlaySpeed={1}
                            partialVisible={true}
                            //   keyBoardControl={true}
                            customTransition="transform 300ms ease-in-out"
                            transitionDuration={3000}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            //   deviceType={this.props.deviceType}
                            dotListClass="custom-dot-list-style"
                            minimumTouchDrag="50"
                        //   itemClass="carousel-item-padding-40-px"
                        >
                            <div className="General-Content">

                                <div className="card">
                                    <div className="card-img"></div>
                                    <div className="card-content">CÔNG AN</div>
                                    <div className="container1">
                                        <div className="group_red">
                                            <div className="num_red_1">
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
                                        <Col className="content-background-icon" md={4} >
                                            <img className="icon_1" src={IMAGES.BIDV} alt="" />
                                        </Col>
                                        <Col className="content-background-icon" md={4}>
                                            <img className="icon_1" src={IMAGES.ACB} alt="" />
                                        </Col>
                                        <Col className="content-background-icon" md={4}>
                                            <img className="icon_1" src={IMAGES.EXIMBANK} alt="" />
                                        </Col>
                                    </Row>
                                    <Row className="content-icon">
                                        <Col className="content-background-icon" md={4}>
                                            <img className="icon_1" src={IMAGES.BIDV} alt="" />
                                        </Col>
                                        <Col className="content-background-icon" md={4}>
                                            <img className="icon_1" src={IMAGES.ACB} alt="" />
                                        </Col>
                                        <Col className="content-background-icon" md={4}>
                                            <img className="icon_1" src={IMAGES.EXIMBANK} alt="" />
                                        </Col>
                                    </Row>

                                </div>
                            </div>

                            <div className="card1" >
                                <div className="card-img2"></div>
                                <div className="card-content">TÀI CHÍNH NGÂN HÀNG</div>
                                <div className="container1">
                                    <div className="group_blue">
                                        <div className="num">
                                            <img className="image_number-left" src={IMAGES.SIX} alt="" />

                                        </div>
                                        <div className="num1">
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
                                    <Col className="content-background-icon" md={4}>
                                        <img className="icon_1" src={IMAGES.BIDV} alt="" />
                                    </Col>
                                    <Col className="content-background-icon" md={4}>
                                        <img className="icon_1" src={IMAGES.ACB} alt="" />
                                    </Col>
                                    <Col className="content-background-icon" md={4}>
                                        <img className="icon_1" src={IMAGES.EXIMBANK} alt="" />
                                    </Col>
                                </Row>
                                <Row className="content-icon">
                                    <Col className="content-background-icon" md={4}>
                                        <img className="icon_1" src={IMAGES.BIDV} alt="" />
                                    </Col>
                                    <Col className="content-background-icon" md={4}>
                                        <img className="icon_1" src={IMAGES.ACB} alt="" />
                                    </Col>
                                    <Col className="content-background-icon" md={4}>
                                        <img className="icon_1" src={IMAGES.EXIMBANK} alt="" />
                                    </Col>
                                </Row>
                            </div>
                            <div className="card">
                                <div className="card-img1"></div>
                                <div className="card-content">ĐIỆN LỰC</div>
                                <div className="container1">
                                    <div className="group">
                                        <div className="num_red_1">
                                            <img className="image_number-left" src={IMAGES.TWENTY} alt="" />

                                        </div>
                                        <div className="num_red_2">
                                            <img className="image_number-right" src={IMAGES.ONEDUNDRED} alt="" />
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
                                    <Col className="content-background-icon" md={4}>
                                        <img className="icon_1" src={IMAGES.BIDV} alt="" />
                                    </Col>
                                    <Col className="content-background-icon" md={4}>
                                        <img className="icon_1" src={IMAGES.ACB} alt="" />
                                    </Col>
                                    <Col className="content-background-icon" md={4}>
                                        <img className="icon_1" src={IMAGES.EXIMBANK} alt="" />
                                    </Col>
                                </Row>
                            </div>

                            <div className="card1">
                                <div className="card-img2"></div>
                                <div className="card-content">DOANH NGHIỆP VỪA VÀ NHỎ</div>
                                <div className="container1">
                                    <div className="group">
                                        <div className="num">
                                            <img className="image_number-left" src={IMAGES.SIX} alt="" />

                                        </div>
                                        <div className="num1">
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
                                    <Col className="content-background-icon" md={4} >
                                        <img className="icon_1" src={IMAGES.BIDV} alt="" />
                                    </Col>
                                    <Col className="content-background-icon" md={4}>
                                        <img className="icon_1" src={IMAGES.ACB} alt="" />
                                    </Col>
                                    <Col className="content-background-icon" md={4}>
                                        <img className="icon_1" src={IMAGES.EXIMBANK} alt="" />
                                    </Col>
                                </Row>
                                {/* </div> */}
                            </div>

                        </Carousel>
                        <Col className="general-content-part2">
                            {/* <Row style=" padding-bottom: 40px;"> */}
                            <Row className="tittle-part2">
                                <Row className="latest-Solution">
                                    <Col md={12} className="title-solution-sd-2nd">DỰ ÁN TIÊU BIỂU
        </Col>
                                </Row>

                                {/* <Marquee title="KHÁCH HÀNG" /> */}

                            </Row>
                            {/* /////////////////////////////////Part 2/////////////////// */}
                            {/* //////////////////////////////////////////////////////////// */}

                            <Carousel className="carousel-res-part2"
                                swipeable={true}
                                draggable={true}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                autoPlay={true}
                                arrows={false}
                                autoPlaySpeed={1}
                                partialVisible={true}
                                customTransition="transform 300ms ease-in-out"
                                transitionDuration={3000}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                dotListClass="custom-dot-list-style"
                                minimumTouchDrag="50"
                            >
                                <div className="general-content-part2">

                                    <div className="card-part2">
                                        <div className="mini-title" >Điện lực</div>
                                        <div className="background-img-part2">
                                            <img className="card-img-part2" src={IMAGES.EXIMBANK} alt="" />
                                        </div>
                                        <Row>
                                            <Col md={1} className="header-content-arrow">
                                            </Col>
                                            <Col className="header-content" md={11}>Chi Nhánh Tổng Công Ty Điện Lực Miền Nam Tnhh - Công Ty Thí Nghiệm Điện Miền Nam (Etc2)Cung cấp hệ thống camera giám sát cho TBA 110kV Cần Giuộc.
    </Col>
                                        </Row>
                                        <Row>
                                            <Col md={2} className="header-content-arrow">&gt;
    </Col>
                                            <Col className="header-content-link" md={10}>Cung cấp hệ thống camera giám sát cho TBA 110kV Cần Giuộc.
    </Col>
                                        </Row>
                                        <Row>
                                            <Col md={2} className="header-content-arrow">&gt;
    </Col >
                                            <Col className="header-content-link" md={10}>Cung cấp hàng kẹp và phụ kiện các loại cho tủ bảng điện.
    </Col>
                                        </Row>
                                    </div>
                                </div>

                                <div className="Ggeneral-content-part2">

                                    <div className="card-part2">
                                        <div className="mini-title-blue">Ngân hàng</div>
                                        <div className="background-img-part2">
                                            <img className="card-img-part2" src={IMAGES.EXIMBANK} alt="" />
                                        </div>

                                        <Row>
                                            <Col md={1} >
                                            </Col>
                                            <Col className="header-content" md={11}>Chi Nhánh Tổng Công Ty Điện Lực Miền Nam Tnhh - Công Ty Thí Nghiệm Điện Miền Nam (Etc2)Cung cấp hệ thống camera giám sát cho TBA 110kV Cần Giuộc.
    </Col>
                                        </Row>
                                        <Row>
                                            <Col md={2} className="header-content-arrow">&gt;
    </Col>
                                            <Col className="header-content-link" md={10}>Cung cấp hệ thống camera giám sát cho TBA 110kV Cần Giuộc.
    </Col>
                                        </Row>
                                        <Row>
                                            <Col md={2} className="header-content-arrow">&gt;
    </Col >
                                            <Col href="#" className="header-content-link" md={10}>Cung cấp hàng kẹp và phụ kiện các loại cho tủ bảng điện.
    </Col>
                                        </Row>

                                        {/* <Marquee1/> */}

                                    </div>
                                </div>
                                <div className="general-content-part2">

                                    <div className="card-part2">
                                        <div className="mini-title-blue">Điện lực</div>
                                        <div className="background-img-part2">
                                            <img className="card-img-part2" src={IMAGES.EXIMBANK} alt="" />
                                        </div>
                                        <Row>
                                            <Col md={1} className="header-content-arrow">
                                            </Col>
                                            <Col className="header-content" md={11}>Chi Nhánh Tổng Công Ty Điện Lực Miền Nam Tnhh - Công Ty Thí Nghiệm Điện Miền Nam (Etc2)Cung cấp hệ thống camera giám sát cho TBA 110kV Cần Giuộc.
    </Col>
                                        </Row>
                                        <Row>
                                            <Col md={2} className="header-content-arrow">&gt;
    </Col>
                                            <Col className="header-content-link" md={10}>Cung cấp hệ thống camera giám sát cho TBA 110kV Cần Giuộc.
    </Col>
                                        </Row>
                                        <Row>
                                            <Col md={2} className="header-content-arrow">&gt;
    </Col >
                                            <Col className="header-content-link" md={10}>Cung cấp hàng kẹp và phụ kiện các loại cho tủ bảng điện.
    </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Carousel>
                        </Col>
                    </Col>
                </Col>
            </Col>
        </Row>

    );
}
export default Solution
