import Diamond2 from '../diamond/index';
import ICONS from '../../../assets/icons/icons';
import ThreeVerticalLine from '../verticalLine/index';
import './style.scss';

const Solution1 = () => {
    const DIAMOND = [
        {
            src: ICONS.SREEN,
            title: 'Hệ thống màn hình ghép',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.MEET,
            title: 'Hệ thống hôi nghị trực tuyến',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.CAMERA,
            title: 'Hệ thống thiết bị camera an ninh',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.POWER,
            title: 'Hệ thống hôi nghị trực tuyến',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.VETINH,
            title: 'Hệ thống hôi nghị trực tuyến',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.NET,
            title: 'Hệ thống hôi nghị trực tuyến',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.FIRE,
            title: 'Hệ thống hôi nghị trực tuyến',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.PRINT,
            title: 'Hệ thống hôi nghị trực tuyến',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.CAM,
            title: 'Hệ thống hôi nghị trực tuyến',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.SET,
            title: 'Hệ thống hôi nghị trực tuyến',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.UPS,
            title: 'Hệ thống hôi nghị trực tuyến',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.ME,
            title: 'Hệ thống hôi nghị trực tuyến',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.PAC,
            title: 'Hệ thống hôi nghị trực tuyến',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.BTS,
            title: 'Hệ thống hôi nghị trực tuyến',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.ATM,
            title: 'Hệ thống hôi nghị trực tuyến',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.STRUC,
            title: 'Hệ thống hôi nghị trực tuyến',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        }
    ];

    let rows = [], cols = []
    let index = 0, int = 0
    let four = true;

    for (index; index < DIAMOND.length; index++) {

        cols.push(<Diamond2 key={index} contain={DIAMOND[index].contain} src={DIAMOND[index].src} title={DIAMOND[index].title} bgColor='#F5F5F5'/>)

        if (index === 1) {
            rows.push(
                <div className="group group--three" key={index}>
                    {cols}
                </div>
            )
            cols = []
            int = 0
            continue
        }

        if (four && (int + 1) % 4 === 0) {
            rows.push(
                <div className="group" key={index}>
                    {cols}
                </div>
            )
            cols = []
            int = 0
            four = false
            continue
        }

        if (four === false && (int + 1) % 3 === 0) {
            rows.push(
                <div className="group" key={index}>
                    {cols}
                </div>
            )
            cols = []
            int = 0
            four = true
            continue
        }

        if (index === DIAMOND.length - 1) {
            if(four === true && cols.length === 1) {
                cols.push(<Diamond2 hidden='hidden'/>)
            }
            const className = four === false ? 'group group--three' : cols.length === 3 || cols.length === 1 ? 'group group--four' : 'group';
            rows.push(
                <div className={className} key={index}>
                    {cols}
                </div>
            )
        }

        int++;
    }
    return (
        <div className="diamond-group">
            <div className="title">
                {/* <h1>GIẢI PHÁP - SẢN PHẨM</h1> */}
                {/* <div className="timhieu">
                    <ThreeVerticalLine borderLeft="5px solid white"/>
                    <a href="/solution">TÌM HIỂU</a>
                    <ThreeVerticalLine borderLeft="5px solid white"/>
                </div> */}
            </div>
            {rows}
        </div>
    )
}

export default Solution1