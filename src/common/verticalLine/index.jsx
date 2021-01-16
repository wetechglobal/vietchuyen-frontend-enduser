
import './style.scss';

const ThreeVerticalLine = (props) => {
    const {borderLeft} = props;
    var myStyle = {
        borderLeft: borderLeft,
    }
    return (
        <div className="group-line">
            <div className="vline" style={myStyle}></div>
            <div className="vline" style={myStyle}></div>
            <div className="vline" style={myStyle}></div>
        </div>
    )
}
export default ThreeVerticalLine;