import IMAGES from 'assets/images/images';
import ICONS from 'assets/icons/icons';
import { Container, Figure, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Diamond from './diamond';

const Module = () => {
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
        // {
        //     src: ICONS.BTS,
        //     title: 'giai-phap-hoi-nghi-truyen-hinh',
        //     contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        // },
        // {
        //     src: ICONS.ATM,
        //     title: 'giai-phap-hoi-nghi-truyen-hinh',
        //     contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        // },
        // {
        //     src: ICONS.STRUC,
        //     title: 'giai-phap-hoi-nghi-truyen-hinh',
        //     contain: 'Giải pháp hội nghị truyền hình hay họp trực tuyến là hệ thống thiết bị (bao gồm cả phần cứng và phần mềm) hỗ trợ truyền tải hình ảnh và âm thanh...'
        // }
    ];
    const { t } = useTranslation();

    let rows = [], cols = []
    let index = 0, int = 0
    let three = true;

    for (index; index < DIAMOND.length; index++) {

        cols.push(<Diamond key={index} contain={DIAMOND[index].contain} src={DIAMOND[index].src} title={DIAMOND[index].title} />)

        if (three && (int + 1) % 3 === 0) {
            rows.push(
                <div className="group" key={index}>
                    {cols}
                </div>
            )
            cols = []
            int = 0
            three = false
            continue
        }

        if (three === false && (int + 1) % 4 === 0) {
            rows.push(
                <div className="group" key={index}>
                    {cols}
                </div>
            )
            cols = []
            int = 0
            three = true
            continue
        }

        if (index === DIAMOND.length - 1) {
            const className = three ? 'group group--three' : 'group group--four';
            rows.push(
                <div className={className} key={index}>
                    {cols}
                </div>
            )
        }

        int++;
    }
 
    return (
        <div className="strength">
            <Figure className="main-strength">
                <Figure.Image
                    src={IMAGES.BGMODULE}
                    width="100%"
                />
                <Container>
                    <Row xs={1} md={2} lg={3}>
                        <Col className="left">
                            <img className="linedoc" src={IMAGES.LINEDOC} alt="" />
                            <div>
                                <h1>{t('strengths.title')}</h1>
                                <span>{t('strengths.titleFirst')}
                                    <span>{t('strengths.titleCenter')}</span>
                                    {t('strengths.titleLast')}
                                </span>
                            </div>
                        </Col>
                        <Col className="center">
                            <img className="linedoc" src={IMAGES.LINEDOC} alt="" />
                            <div className="content-num">
                                <div className="main-group">
                                    <div className="group">
                                        <img className="num" src={IMAGES.TEN} alt="" />
                                        <img className="vongtron" src={IMAGES.BGVONGTRON} alt="" />
                                    </div>
                                    <span>{t('strengths.10')}</span>
                                </div>
                                <div className="main-group padding-bottom">
                                    <div className="group">
                                        <img className="num" src={IMAGES.TWENTY} alt="" />
                                        <img className="vongtron" src={IMAGES.BGVONGTRON} alt="" />
                                    </div>
                                    <span>{t('strengths.20')}</span>
                                </div>
                                <div className="main-group">
                                    <div className="group">
                                        <img className="num" src={IMAGES.ONEDUNDRED} alt="" />
                                        <img className="vongtron" src={IMAGES.BGVONGTRON} alt="" />
                                    </div>
                                    <span>{t('strengths.100')}</span>
                                </div>
                            </div>
                        </Col>
                        <Col className="right">
                            <img className="linedoc one" src={IMAGES.LINEDOC} alt="" />
                            <div className="content-num">
                                <div className="main-group long">
                                    <div className="group">
                                        <img className="num" src={IMAGES.THREEHUNDRED} alt="" />
                                        <img className="vongtron" src={IMAGES.BGVONGTRON} alt="" />
                                    </div>
                                    <span>{t('strengths.300')}</span>
                                </div>
                                <div className="main-group padding-bottom">
                                    <div className="group">
                                        <img className="num" src={IMAGES.SIXTYTHREE} alt="" />
                                        <img className="vongtron" src={IMAGES.BGVONGTRON} alt="" />
                                    </div>
                                    <span>{t('strengths.63')}</span>
                                </div>
                                <div className="main-group long">
                                    <div className="group">
                                        <img className="num" src={IMAGES.SIX} alt="" />
                                        <img className="vongtron" src={IMAGES.BGVONGTRON} alt="" />
                                    </div>
                                    <span>{t('strengths.6')}</span>
                                </div>
                            </div>
                            <img className="linedoc two" src={IMAGES.LINEDOC} alt="" />
                        </Col>
                    </Row>
                    <Row className="giaiphap">
                        <Col>
                            <Row>
                                <h1>GIẢI PHÁP - SẢN PHẨM</h1>
                            </Row>
                            <Row>
                                <h4>TÌM HIỂU</h4>
                            </Row>
                            <Row className="diamond-group">
                                {rows}
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </Figure>
        </div>
    )
}
export default Module;