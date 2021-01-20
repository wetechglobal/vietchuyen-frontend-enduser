import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './style.scss';
import CardCustomProject from "./cardcustomProject";
import { useTranslation } from 'react-i18next';
import project from '../data/dataProject';
const CarouselcustomProject = (props) => {
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
        autoPlaySpeed={1}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={3000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        minimumTouchDrag="50"
        >
       {/* {project.map((item, idx) => <CardCustom2 minititlecolor={item.titlecolor} contentmini1={item.contentMini1} contentheader={item.contenthead}  imge={IMAGES.EXIMBANK} miniTitle={item.titlemini}/> )} */}
       {project.map((item, idx) => <CardCustomProject minititlecolor={item.titlecolor} contentmini1={item.contentMini1} contentheader={item.contenthead}  imge={item.urlImg} miniTitle={item.titlemini}/> )}
    
    </Carousel> 
    )
}

export default CarouselcustomProject