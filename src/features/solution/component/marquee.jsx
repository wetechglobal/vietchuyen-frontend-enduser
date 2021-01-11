import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import  IMAGES from "assets/images/images";
import { Row, Col,Card,CardGroup,CardDeck } from 'react-bootstrap';
import './style.scss';

const Marquee1 = (props) => {
    // const { title, datas } = props;
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };

    return (
        <div className="">
            {/* <h1>{title}</h1> */}
            <Carousel className="carousel-res-part2"
 swipeable={true}
 draggable={true}
 responsive={responsive}
 ssr={true} // means to render carousel on server-side.
 infinite={true}
 autoPlay={true}
 arrows={false}
 autoPlaySpeed={500}
 partialVisible={true}
 customTransition="transform 300ms ease-in-out"
 transitionDuration={500}
 containerClass="carousel-container"
 removeArrowOnDeviceType={["tablet", "mobile"]}
 dotListClass="custom-dot-list-style"
 minimumTouchDrag="50"
>
<div className="general-content-part2">

    <div className="card-part2">
        <div className="mini-title">Điện lực</div>
        <div className="background-img-part2">
            <img className="card-img-part2"  src={IMAGES.EXIMBANK} alt="" />
    </div>
<Row>
    <Col md={1} > 
    </Col>
    <Col className="header-content" md={11}>Chi Nhánh Tổng Công Ty Điện Lực Miền Nam Tnhh - Công Ty Thí Nghiệm Điện Miền Nam (Etc2)Cung cấp hệ thống camera giám sát cho TBA 110kV Cần Giuộc. 
    </Col>
</Row>
<Row>
    <Col md={2} > 
    </Col>
    <Col className="header-content-link" md={10}>Cung cấp hệ thống camera giám sát cho TBA 110kV Cần Giuộc. 
    </Col>
</Row>
<Row>
    <Col md={2} className="header-content-link"> 
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
            <img className="card-img-part2"  src={IMAGES.EXIMBANK} alt="" />
        </div>
  
        <Row>
    <Col md={1} > 
    </Col>
    <Col className="header-content" md={11}>Chi Nhánh Tổng Công Ty Điện Lực Miền Nam Tnhh - Công Ty Thí Nghiệm Điện Miền Nam (Etc2)Cung cấp hệ thống camera giám sát cho TBA 110kV Cần Giuộc. 
    </Col>
</Row>
<Row>
    <Col md={2} > 
    </Col>
    <Col className="header-content-link" md={10}>Cung cấp hệ thống camera giám sát cho TBA 110kV Cần Giuộc. 
    </Col>
</Row>
<Row>
    <Col md={2} className="header-content-link"> 
    </Col >
    <Col className="header-content-link" md={10}>Cung cấp hàng kẹp và phụ kiện các loại cho tủ bảng điện.
    </Col>
</Row>
  


    </div>
</div>


<div className="general-content-part2">

    <div className="card-part2">
    <div className="mini-title-blue">Điện lực</div>
        <div className="background-img-part2">
            <img className="card-img-part2"  src={IMAGES.EXIMBANK} alt="" />
        </div>
        <Row>
    <Col md={1} > 
    </Col>
    <Col className="header-content" md={11}>Chi Nhánh Tổng Công Ty Điện Lực Miền Nam Tnhh - Công Ty Thí Nghiệm Điện Miền Nam (Etc2)Cung cấp hệ thống camera giám sát cho TBA 110kV Cần Giuộc. 
    </Col>
</Row>
<Row>
    <Col md={2} > 
    </Col>
    <Col className="header-content-link" md={10}>Cung cấp hệ thống camera giám sát cho TBA 110kV Cần Giuộc. 
    </Col>
</Row>
<Row>
    <Col md={2} className="header-content-link"> 
    </Col >
    <Col className="header-content-link" md={10}>Cung cấp hàng kẹp và phụ kiện các loại cho tủ bảng điện.
    </Col>
</Row>

  


    </div>
</div>





</Carousel>
        </div>
    )
}

export default Marquee1