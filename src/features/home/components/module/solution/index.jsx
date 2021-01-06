import Diamond from '../diamon/index';
import ICONS from 'assets/icons/icons';
import './style.scss';

const Solution = () => {
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
            title: 'giai-phap-hoi-nghi-truyen-hinh',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.VETINH,
            title: 'giai-phap-hoi-nghi-truyen-hinh',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.NET,
            title: 'giai-phap-hoi-nghi-truyen-hinh',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.FIRE,
            title: 'giai-phap-hoi-nghi-truyen-hinh',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.PRINT,
            title: 'giai-phap-hoi-nghi-truyen-hinh',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.CAM,
            title: 'giai-phap-hoi-nghi-truyen-hinh',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.SET,
            title: 'giai-phap-hoi-nghi-truyen-hinh',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.UPS,
            title: 'giai-phap-hoi-nghi-truyen-hinh',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.ME,
            title: 'giai-phap-hoi-nghi-truyen-hinh',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.PAC,
            title: 'giai-phap-hoi-nghi-truyen-hinh',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.BTS,
            title: 'giai-phap-hoi-nghi-truyen-hinh',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.ATM,
            title: 'giai-phap-hoi-nghi-truyen-hinh',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.STRUC,
            title: 'giai-phap-hoi-nghi-truyen-hinh',
            contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        }
    ];

    let rows = [], cols = []
    let index = 0, int = 0
    let four = true;

    for (index; index < DIAMOND.length; index++) {

        cols.push(<Diamond key={index} contain={DIAMOND[index].contain} src={DIAMOND[index].src} title={DIAMOND[index].title} className="item"/>)

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
                cols.push(<Diamond className="item hidden"/>)
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
                <h1>GIẢI PHÁP - SẢN PHẨM</h1>
                <h4>TÌM HIỂU</h4>
            </div>
            {rows}
        </div>
    )
}

export default Solution