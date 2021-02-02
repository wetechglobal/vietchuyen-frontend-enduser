import CardCustom from "features/solution/customer";
import CardProject from "features/solution/project";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './style.scss';

const Marquee = (props) => {
    const { title, datas, text, type} = props;

    let data

    if (type==="picture") {
        data = datas.map((item, idx) => <img key={idx} src={item.src} alt=""/> )
    }

    if (type==="customer") {
        data = datas.map((item, idx) => <CardCustom key={idx} colorBg={item.color} cardImg={item.cardimg} cardContent={item.title} projectNum={item.projectNum} projectValue={item.value} clientCustom={item.dsLogo}/>)
    }

    if (type==="project") {
        data = datas.map((item, idx) => <CardProject key={idx} minititlecolor={item.titlecolor} contentmini={item.contentMini} contentheader={item.contenthead} imge={item.urlImg} miniTitle={item.titlemini}/> )
    }

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: type==="picture" ? 5 : 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: type==="picture" ? 5 : 3,
            partialVisibilityGutter: 20
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: type==="picture" ? 3 : 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: type==="picture" ? 3 : 1
        }
    };
    return (
        <div className="marquee">
            <h1>{title}</h1>
            {text}
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
                containerClass={type}
                itemClass={"carousel-" + type}
                arrows={false}
            >
                {data}
            </Carousel>
        </div>
    )
}

export default Marquee