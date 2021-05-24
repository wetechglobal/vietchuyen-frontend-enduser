import { useState, useEffect } from "react";
import { Col, Row, Image } from 'react-bootstrap';
import TabItem from './components/tabItem/index';
import HighlightNews from './components/highlightNews/index';
import ListNews from './components/listNews/index';
import IMAGES from "assets/images/images";
import './style.scss';
import Moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNewsAction, getAllCategoryAction } from './newsAction';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';

const News = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [dataType, setDataType] = useState(0);
    const [dataTabs, setdataTabs] = useState([]);
    const [highlightNews, setHighlightNews] = useState([]);
    const [listNews, setListNews] = useState([]);

    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1)
    const strNow = Moment(today).format('YYYYMMDD');
    const strYesterday = Moment(yesterday).format('YYYYMMDD');

    // News
    const [news, setNews] = useState('');
    const [newsArray, setNewsArray] = useState([]);
    const getAllNews = useSelector(state => {
        return state.newsGetAllReducer;
    });

    // Category
    const [category, setCategory] = useState('');
    const [categoryArray, setCategoryArray] = useState([]);
    const getAllCategory = useSelector(state => {
        return state.categoryGetAllReducer;
    });

    const init = () => {
        const language = localStorage.getItem('i18nextLng') === 'en' ? 'en' : 'vi';

        // News
        const textNews = language === 'vi' ? 'newsVi' : 'newsEn';
        setNews(textNews);
        if (sessionStorage.getItem(textNews) === null) {
            dispatch(getAllNewsAction(language));
        }
        else {
            setNewsArray(JSON.parse(sessionStorage.getItem(textNews)));
        }

        // Category
        const textCategory = language === 'vi' ? 'categoryVi' : 'categoryEn';
        setCategory(textCategory);
        if (sessionStorage.getItem(textCategory) === null) {
            dispatch(getAllCategoryAction(language));
        }
        else {
            setCategoryArray(JSON.parse(sessionStorage.getItem(textCategory)));
        }
    }

    const getCategory = () => {
        // Category
        if (getAllCategory?.responseData?.data?.records.length > 0) {
            //set data to categoryArray if session is null
            if (sessionStorage.getItem(category) === null) {
                setCategoryArray(getAllCategory.responseData.data.records);
            }

            //set categoryArray new to localStorage
            if (localStorage.getItem(category + strNow) === null) {
                localStorage.setItem(category + strNow, JSON.stringify(getAllCategory.responseData.data.records));
            }

            //set categoryArray old from localStorage
            if (localStorage.getItem(category + strYesterday) !== null) {
                localStorage.removeItem(category + strYesterday);
            }

            //set categoryArray data to session if session is null
            if (sessionStorage.getItem(category) === null && categoryArray.length > 0) {
                sessionStorage.setItem(category, JSON.stringify(getAllCategory.responseData.data.records));
            }
        }

        //if server error and categoryArray on localStorage have data
        if (getAllCategory?.isError === true) {
            if (localStorage.getItem(category + strNow) !== null && sessionStorage.getItem(category) === null) {
                setCategoryArray(JSON.parse(localStorage.getItem(category + strNow)));
                sessionStorage.setItem(category, localStorage.getItem(category + strNow));
            }
        }
    }

    const getNews = () => {
        // News
        if (getAllNews?.responseData?.data?.records.length > 0) {
            //set data to newsArray if session is null
            if (sessionStorage.getItem(news) === null) {
                setNewsArray(getAllNews.responseData.data.records);
            }

            //set newsArray new to localStorage
            if (localStorage.getItem(news + strNow) === null) {
                localStorage.setItem(news + strNow, JSON.stringify(getAllNews.responseData.data.records));
            }

            //set newsArray old from localStorage
            if (localStorage.getItem(news + strYesterday) !== null) {
                localStorage.removeItem(news + strYesterday);
            }

            //set newsArray data to session if session is null
            if (sessionStorage.getItem(news) === null && newsArray.length > 0) {
                sessionStorage.setItem(news, JSON.stringify(getAllNews.responseData.data.records));
            }
        }

        //if server error and newsArray on localStorage have data
        if (getAllNews?.isError === true) {
            if (localStorage.getItem(news + strNow) !== null && sessionStorage.getItem(news) === null) {
                setNewsArray(JSON.parse(localStorage.getItem(news + strNow)));
                sessionStorage.setItem(news, localStorage.getItem(news + strNow));
            }
        }
    }

    const setDataTab = () => {
        //set data for tab
        if (categoryArray.length > 0 && categoryArray[0].languageCode === category.slice(-2).toLowerCase()) {
            var tempdataTabs = [];
            categoryArray.map((item, idx) => {
                if (idx === 0 && dataType === 0) {
                    setDataType(item.id);
                }
                var dataTab = { id: item.id, title: item.name };
                tempdataTabs.push(dataTab);
            });
            setdataTabs(tempdataTabs);
        }
    }

    const setNewsData = () => {
        //set list news and hightlight
        var highlightNew = [];
        var highlights = [];
        var highlight = [];
        var idType = [];
        if (newsArray.length > 0 && newsArray[0].languageCode === news.slice(-2).toLowerCase()) {
            categoryArray?.map((item, i) => {
                idType.push(item.id);
            })

            if(idType.includes(dataType) === false) setDataType(categoryArray[0]?.id);
            var newsCate = newsArray.filter(row => row.categoryId === dataType);
            highlightNew = newsCate.filter(row => row.isHighlight === true).slice(0, 2);
            switch (highlightNew.length) {
                case 0:
                    highlight = newsCate.slice(0, 2);
                    if (highlight.length > 0) highlightNew = highlight;
                    break;
                case 1:
                    highlight = newsCate.filter(row => row.id !== highlightNew[0].id).slice(0, 1);
                    if (highlight.length > 0) highlightNew.push(highlight[0]);
                    break;
                default:
                    break;
            }

            setHighlightNews(highlightNew);
            highlightNew?.map((item, i) => {
                highlights.push(item.id);
            })

            var listNew = newsCate.filter(row => highlights.includes(row.id) === false);
            setListNews(listNew);
        }
    }

    useEffect(() => {
        setDataType(0);
        init();
    }, [localStorage.getItem('i18nextLng')]);

    useEffect(() => {
        setDataTab();
        setNewsData();
    }, [newsArray]);

    useEffect(() => {
        setDataTab();
        setNewsData();
    }, [categoryArray]);

    useEffect(() => {
        setDataTab();
        setNewsData();
    }, [dataType]);

    //alway run
    useEffect(() => {
        getCategory();
        getNews();
    });

    //run first times
    useEffect(() => {
    }, []);

    return (
        <>
            {/* --- BANNER --- */}
            <Row className="news__banner">
                <Image src={IMAGES.BANNER} className="news__banner--image" />
            </Row>

            <Col className="news__col">
                <div className="news__row news__header">
                    {
                        dataTabs.map(({ id, title }) => <TabItem
                            key={id}
                            title={title}
                            onItemClicked={() => setDataType(id)}
                            isActive={dataType === id}
                        />)
                    }
                </div>

                <Row>
                    <HighlightNews data={highlightNews} />
                    <ListNews data={listNews} />
                </Row>

                <div className="news__row news__footer">
                    <span>{parse(t('strengths.news'))}</span>
                    <div className="news__line" />
                </div>
            </Col>
        </>
    );
}
export default News
