
import { Carousel } from 'react-bootstrap';
import IMAGES from "assets/images/images";

const Slider = () => {
    const sliders = [
        {
            src: IMAGES.SLIDER1,
            alt: 'first-label',
            label: 'First slide label',
            description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        },
        {
            src: IMAGES.SLIDER2,
            alt: 'first-label',
            label: 'First slide label',
            description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        },
        {
            src: IMAGES.SLIDER3,
            alt: 'first-label',
            label: 'First slide label',
            description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        },
        {
            src: IMAGES.SLIDER4,
            alt: 'first-label',
            label: 'First slide label',
            description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        }
    ];
    return (
        <Carousel>
            {
                sliders.map((item, idx) =>
                    <Carousel.Item key={idx}>
                        <img
                            className="d-block w-100"
                            src={item.src}
                            alt={item.alt}
                        />

                        {/* <Carousel.Caption>
                            <h3>{item.lable}</h3>
                            <p>{item.description}</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                )
            }
        </Carousel>
    );
}
export default Slider
