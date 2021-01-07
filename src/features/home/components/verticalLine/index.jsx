
import './style.scss';

const ThreeVerticalLine = (props) => {
    const {borderLeft} = props;
    var myStyle = {
        borderLeft: borderLeft,
    }
    return (
        <div class="group-line">
            <div class="vline" style={myStyle}></div>
            <div class="vline" style={myStyle}></div>
            <div class="vline" style={myStyle}></div>
        </div>
    )
}
export default ThreeVerticalLine;