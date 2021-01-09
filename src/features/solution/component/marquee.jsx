import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import './style.scss';

const Marquee = (props) => {
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
        <div className="marquee">
            {/* <h1>{title}</h1> */}
            <Carousel
 swipeable={true}
 draggable={true}
 responsive={responsive}
 ssr={true} // means to render carousel on server-side.
 infinite={true}
 autoPlay={true}
 arrows={false}
 autoPlaySpeed={3000}
 partialVisible={true}
 customTransition="transform 300ms ease-in-out"
 transitionDuration={500}
 containerClass="carousel-container"
 removeArrowOnDeviceType={["tablet", "mobile"]}
 dotListClass="custom-dot-list-style"
 minimumTouchDrag="50"
>
  {/* <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div> */}
</Carousel>
        </div>
    )
}

export default Marquee