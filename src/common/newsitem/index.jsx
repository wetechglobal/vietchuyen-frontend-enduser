import { Nav, Figure } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { useTranslation } from 'react-i18next';
import './style.scss';

const NewsItem = (props) => {
    // lineTextColor => blue, red, highlight
    // lineSrc => ICONS.BLUELINE, ICONS.REDLINE, ICONS.HIGHLIGHTLINE
    const { lineTextColor, lineSrc, date, type, title, description, link, id } = props;
    const { t } = useTranslation();

    return (
        <div className="box">
            <div className="box-top">
                <Figure>
                    <div className={'thumnail ' + lineTextColor}><Figure.Image src={link}/></div>
                    <Figure.Image className={'line ' + lineTextColor} src={lineSrc}/>
                    <div className={'text-highlight ' + lineTextColor}>{t('news.highlight')}</div>
                </Figure>          
                <div className={'text ' + lineTextColor}>{type}</div>
            </div>
            <div className="box-date">
                <span><FontAwesomeIcon icon={faClock} />{date}</span>
            </div>
            <div className="box-lable"><Nav.Link href={`/news/${id}`}>{title}</Nav.Link></div>
            <div className="box-bottom">{description}</div>
        </div>
    )
}

export default NewsItem