import Diamond from '../diamon/index';
import ICONS from 'assets/icons/icons';
import { useTranslation } from 'react-i18next';
import ThreeVerticalLine from '../verticalLine/index';
import './style.scss';

const Solution = (props) => {
    const {backgroundcolor,diamondtitle,diamondresearch,hiddensolution} = props;
    const { t } = useTranslation();
    const DIAMOND = [
        {
            src: ICONS.SREEN,
            name: t('diamond.sreenName'),
            provider: t('diamond.sreenProvider'),
            property: t('diamond.sreenProperty'),
            benefit: t('diamond.sreenBenefit')
        },
        {
            src: ICONS.MEET,
            name: t('diamond.meetName'),
            provider: t('diamond.meetProvider'),
            property: t('diamond.meetProperty'),
            benefit: t('diamond.meetBenefit')
        },
        {
            src: ICONS.CAMERA,
            name: t('diamond.cameraName'),
            provider: t('diamond.cameraProvider'),
            property: t('diamond.cameraProperty'),
            benefit: t('diamond.cameraBenefit')
        },
        {
            src: ICONS.POWER,
            name: t('diamond.powerName'),
            provider: t('diamond.powerProvider'),
            property: t('diamond.powerProperty'),
            benefit: t('diamond.powerBenefit')
        },
        {
            src: ICONS.VETINH,
            name: t('diamond.vetinhName'),
            provider: t('diamond.vetinhProvider'),
            property: t('diamond.vetinhProperty'),
            benefit: t('diamond.vetinhBenefit')
        },
        {
            src: ICONS.NET,
            name: t('diamond.netName'),
            provider: t('diamond.netProvider'),
            property: t('diamond.netProperty'),
            benefit: t('diamond.netBenefit')
        },
        {
            src: ICONS.FIRE,
            name: t('diamond.fireName'),
            provider: t('diamond.fireProvider'),
            property: t('diamond.fireProperty'),
            benefit: t('diamond.fireBenefit')
        },
        {
            src: ICONS.PRINT,
            name: t('diamond.printName'),
            provider: t('diamond.printProvider'),
            property: t('diamond.printProperty'),
            benefit: t('diamond.printBenefit')
        },
        {
            src: ICONS.CAM,
            name: t('diamond.camName'),
            provider: t('diamond.camProvider'),
            property: t('diamond.camProperty'),
            benefit: t('diamond.camBenefit')
        },
        {
            src: ICONS.SET,
            name: t('diamond.setName'),
            provider: t('diamond.setProvider'),
            property: t('diamond.setProperty'),
            benefit: t('diamond.setBenefit')
        },
        {
            src: ICONS.UPS,
            name: t('diamond.upsName'),
            provider: t('diamond.upsProvider'),
            property: t('diamond.upsProperty'),
            benefit: t('diamond.upsBenefit')
        },
        {
            src: ICONS.ME,
            name: t('diamond.meName'),
            provider: t('diamond.meProvider'),
            property: t('diamond.meProperty'),
            benefit: t('diamond.meBenefit')
        },
        {
            src: ICONS.PAC,
            name: t('diamond.pacName'),
            provider: t('diamond.pacProvider'),
            property: t('diamond.pacProperty'),
            benefit: t('diamond.pacBenefit')
        },
        {
            src: ICONS.BTS,
            name: t('diamond.btsName'),
            provider: t('diamond.btsProvider'),
            property: t('diamond.btsProperty'),
            benefit: t('diamond.btsBenefit')
        },
        {
            src: ICONS.ATM,
            name: t('diamond.atmName'),
            provider: t('diamond.atmProvider'),
            property: t('diamond.atmProperty'),
            benefit: t('diamond.atmBenefit')
        },
        {
            src: ICONS.STRUC,
            name: t('diamond.strucName'),
            provider: t('diamond.strucProvider'),
            property: t('diamond.strucProperty'),
            benefit: t('diamond.strucBenefit')
        }
    ];

    let rows = [], cols = []
    let index = 0, int = 0
    let four = true;

    for (index; index < DIAMOND.length; index++) {

        cols.push(<Diamond key={index} name={DIAMOND[index].name} provider={DIAMOND[index].provider}
            property={DIAMOND[index].property} benefit={DIAMOND[index].benefit} src={DIAMOND[index].src} name={DIAMOND[index].name} bgColor={backgroundcolor}/>)

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
                {/* <h1>{t('diamond.product')}</h1> */}
                <h1>{diamondtitle}</h1>
                {/* <div className="timhieu"> */}
                <div className='timhieu' style={{visibility : hiddensolution}}>
                    <ThreeVerticalLine borderLeft="5px solid white"/>
                    {/* <a href="/solution">{t('diamond.research')}</a> */}
                    <a href="/solution">{diamondresearch}</a>
                    <ThreeVerticalLine borderLeft="5px solid white"/>
                </div>
            </div>
            {rows}
        </div>
    )
}

export default Solution