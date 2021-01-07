import { OverlayTrigger } from 'react-bootstrap';
import './style.scss';

const Diamond = (props) => {
    const {contain, src, title, className} = props;

    return (
        <OverlayTrigger className="tooltip" key="top" placement="top"
            overlay={
                <div style={{
                    backgroundColor: 'white',
                    padding: '20px 20px',
                    color: 'black',
                    borderRadius: 10,
                    width: 400
                }}>
                    <h2 style={{ color: '#0063B0', fontWeight: 'bold' }}>{title}</h2>
                    <span>{contain}</span>
                </div>
            }>
            <div className={className}>
                <div className="content">
                    <img src={src} alt="" />
                    <span className="title">{title}</span>
                </div>
            </div>
        </OverlayTrigger>
    )
}

export default Diamond