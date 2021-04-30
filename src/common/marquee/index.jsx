import CardCustom from "features/solution/customer";
import CardProject from "features/solution/project";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './style.scss';
import config from 'common/config';

const Marquee = (props) => {
    const { title, datas, text, type } = props;

    let data

    if (type === "picture") {
        data = datas.map((item, idx) => <img key={idx} src={item.src} alt="" />)
    }

    if (type === "customer") {
        data = datas.map((item, idx) => {
            return <CardCustom
            colorBg={item.color}
            cardImg={item.cardimg}
            cardContent={item.title}
            projectNum={item.projectNum}
            projectValue={item.value}
            clientCustom={item.dsLogo}/>
        })
    }

    if (type === "project") {
        data = datas.map((item, idx) => {
            let titlecolor = item.type === 'Điện Lực' ? 'mini-title' : item.type === 'Ngân Hàng' ? 'mini-title-blue': 'mini-title-smb';
            let description = item.description.split("</p><p>");
            //let color = idx % 2 === 0 ? 'linear-gradient(#FF2700, #D20311, #BA0707)' : 'linear-gradient(#0063B0, #008CF8)';
            return <CardProject
                minititlecolor={titlecolor}
                contentmini={description}
                contentheader={item.title}
                image={config.HOST + item.pathLogo}
                miniTitle={item.type} />
        })
    }

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: type === "picture" ? 5 : 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: type === "picture" ? 5 : 3,
            partialVisibilityGutter: 20
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: type === "picture" ? 3 : 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: type === "picture" ? 3 : 1
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