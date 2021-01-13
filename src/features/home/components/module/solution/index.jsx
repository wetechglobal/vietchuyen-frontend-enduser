import Diamond from '../diamon/index';
import ICONS from 'assets/icons/icons';
import ThreeVerticalLine from '../../verticalLine/index';
import './style.scss';

const Solution = () => {
    const DIAMOND = [
        {
            src: ICONS.SREEN,
            name: 'Hệ thống màn hình ghép',
            provider: 'Hệ thống màn hình ghép',
            property: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
            benefit: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.MEET,
            name: 'Hệ thống hôi nghị trực tuyến',
            provider: 'Hệ thống màn hình ghép',
            property: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
            benefit: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.CAMERA,
            name: 'Hệ thống thiết bị camera an ninh',
            provider: 'Hệ thống màn hình ghép',
            property: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
            benefit: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.POWER,
            name: 'Hệ thống hôi nghị trực tuyến',
            provider: 'Hệ thống màn hình ghép',
            property: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
            benefit: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.VETINH,
            name: 'Hệ thống hôi nghị trực tuyến',
            provider: 'Hệ thống màn hình ghép',
            property: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
            benefit: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.NET,
            name: 'Hệ thống hôi nghị trực tuyến',
            provider: 'Hệ thống màn hình ghép',
            property: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
            benefit: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.FIRE,
            name: 'Hệ thống hôi nghị trực tuyến',
            provider: 'Hệ thống màn hình ghép',
            property: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
            benefit: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.PRINT,
            name: 'Hệ thống hôi nghị trực tuyến',
            provider: 'Hệ thống màn hình ghép',
            property: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
            benefit: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.CAM,
            name: 'Hệ thống hôi nghị trực tuyến',
            provider: 'Hệ thống màn hình ghép',
            property: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
            benefit: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.SET,
            name: 'Hệ thống hôi nghị trực tuyến',
            provider: 'Hệ thống màn hình ghép',
            property: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
            benefit: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.UPS,
            name: 'Hệ thống hôi nghị trực tuyến',
            provider: 'Hệ thống màn hình ghép',
            property: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
            benefit: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.ME,
            name: 'Hệ thống hôi nghị trực tuyến',
            provider: 'Hệ thống màn hình ghép',
            property: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
            benefit: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.PAC,
            name: 'Hệ thống hôi nghị trực tuyến',
            provider: 'Hệ thống màn hình ghép',
            property: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
            benefit: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.BTS,
            name: 'Hệ thống hôi nghị trực tuyến',
            provider: 'Hệ thống màn hình ghép',
            property: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
            benefit: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.ATM,
            name: 'Hệ thống hôi nghị trực tuyến',
            provider: 'Hệ thống màn hình ghép',
            property: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
            benefit: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        },
        {
            src: ICONS.STRUC,
            name: 'Hệ thống hôi nghị trực tuyến',
            provider: 'Hệ thống màn hình ghép',
            property: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...',
            benefit: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        }
    ];

    let rows = [], cols = []
    let index = 0, int = 0
    let four = true;

    for (index; index < DIAMOND.length; index++) {

        cols.push(<Diamond key={index} name={DIAMOND[index].name} provider={DIAMOND[index].provider}
            property={DIAMOND[index].property} benefit={DIAMOND[index].benefit} src={DIAMOND[index].src} name={DIAMOND[index].name} bgColor='white'/>)

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
                cols.push(<Diamond hidden='hidden'/>)
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
            <div className="name">
                <h1>GIẢI PHÁP - SẢN PHẨM</h1>
                <div className="timhieu">
                    <ThreeVerticalLine borderLeft="5px solid white"/>
                    <a href="/solution">TÌM HIỂU</a>
                    <ThreeVerticalLine borderLeft="5px solid white"/>
                </div>
            </div>
            {rows}
        </div>
    )
}

export default Solution