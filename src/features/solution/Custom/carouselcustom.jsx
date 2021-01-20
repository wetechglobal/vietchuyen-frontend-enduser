import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './style.scss';
import CardCustom from "./cardcustom";
import { useTranslation } from 'react-i18next';
import khTieubieu from '../data/data'
const Carouselcustom = (props) => {
    const { title, datas } = props;
    const { t } = useTranslation();
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
        <Carousel className="carousel-res"
        swipeable={true}
        draggable={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        arrows={false}
        partialVisible={true}
        autoPlaySpeed={10}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={5000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        minimumTouchDrag="50"
        >

       {khTieubieu.map((item, idx) => <CardCustom cardcontent={item.title} linecolor={item.linecolor} cardimg={item.cardimg}colorbg={item.color}/>)}
        
    </Carousel> 
    )
}

export default Carouselcustom