import { OverlayTrigger } from 'react-bootstrap';
import './style.scss';

const Diamond = (props) => {
    const {contain, src, title, bgColor, hidden} = props;

    return (
        <OverlayTrigger className="tooltip" key="top" placement="top"
            overlay={
                <div style={{
                    backgroundColor: 'white',
                    padding: '20px 20px',
                    color: 'black',
                    borderRadius: 10,
                    width: 400,
                    boxShadow: '1px 2px 10px'
                }}>
                    <h4 style={{ color: '#0063B0', fontWeight: 'bold', }}>{title}</h4>
                    <span>{contain}</span>
                </div>
            }>
            <div className="item" style={{backgroundColor: bgColor, visibility : hidden}}>
                <div className="content">
                    <img src={src} alt="" />
                    <span className="title">{title}</span>
                </div>
            </div>
        </OverlayTrigger>
    )
}

export default Diamond