import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './style.scss';

const Marquee = (props) => {
    const { title, datas } = props;
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
        <div className="marquee">
            <h1>{title}</h1>
            <Carousel
                swipeable={true}
                draggable={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .6s"
                transitionDuration={500}
                containerClass="carousel-container"
                itemClass="carousel-picture"
                arrows={false}
                centerMode={true}
            >
                {datas.map((item, idx) => <img key={idx} src={item.src} alt=""/> )}
            </Carousel>
        </div>
    )
}

export default Marquee