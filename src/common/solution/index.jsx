import Diamond from '../diamon/index';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from "react";
import ThreeVerticalLine from '../verticalLine/index';
import { getAllSolutionsAction } from './solutionAction';
import Moment from 'moment';
import './style.scss';

const Solution = (props) => {
    const { backgroundcolor, diamondtitle, diamondresearch, hiddensolution } = props;
    const dispatch = useDispatch();
    const [diamon, setDiamon] = useState('');
    const [diamonArray, setDiamonArray] = useState([]);
    const getAllSolutions = useSelector(state => {
        return state.solutuionGetAllReducer;
    });

    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1)
    const strNow = Moment(today).format('YYYYMMDD');
    const strYesterday = Moment(yesterday).format('YYYYMMDD');

    useEffect(() => {
        const language = localStorage.getItem('i18nextLng') === 'en' ? 2 : 1;
        const text = language === 1 ? 'diamonVi' : 'diamonEn';
        setDiamon(text);
        if(sessionStorage.getItem(text) === null)
        {
            dispatch(getAllSolutionsAction(language));
        }
        else
        {
            setDiamonArray(JSON.parse(sessionStorage.getItem(text)));
        }
    }, [dispatch, localStorage.getItem('i18nextLng')]);

    let rows = [], cols = []
    let index = 0, int = 0
    let four = true;

    if (getAllSolutions?.responseData?.data?.records.length > 0) {
        //set data to diamonArray if session is null
        if(sessionStorage.getItem(diamon) === null)
        {
            setDiamonArray(getAllSolutions.responseData.data.records);
        }

        //set diamonArray new to localStorage
        if(localStorage.getItem(diamon + strNow) === null)
        {
            localStorage.setItem(diamon + strNow, JSON.stringify(getAllSolutions.responseData.data.records));
        }

        //set diamonArray old from localStorage
        if(localStorage.getItem(diamon + strYesterday) !== null)
        {
            localStorage.removeItem(diamon + strYesterday);
        }

        //set diamonArray data to session if session is null
        if(sessionStorage.getItem(diamon) === null && diamonArray.length > 0)
        {
            sessionStorage.setItem(diamon, JSON.stringify(getAllSolutions.responseData.data.records));
        }
    }

    //if server error and diamonArray on localStorage have data
    if(getAllSolutions?.isError === true) {
        if(localStorage.getItem(diamon + strNow) !== null && sessionStorage.getItem(diamon) === null)
        {
            setDiamonArray(JSON.parse(localStorage.getItem(diamon + strNow)));
            sessionStorage.setItem(diamon, localStorage.getItem(diamon + strNow));
        }
    }

    if (diamonArray.length === 0) {
        //show error
    }

    if (diamonArray.length > 0) {
        for (index; index < diamonArray.length; index++) {

            cols.push(<Diamond key={index}
                name={diamonArray[index].title}
                provider={diamonArray[index].subTitle}
                property={diamonArray[index].characteristic}
                benefit={diamonArray[index].benefit}
                src={diamonArray[index].iconUrl}
                bgColor={backgroundcolor} />)

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

            if (index === diamonArray.length - 1) {
                if (four === true && cols.length === 1) {
                    cols.push(<Diamond hidden='hidden' />)
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
    }

    return (
        <div className="diamond-group">
            <div className="name">
                <h1>{diamondtitle}</h1>
                <div className='timhieu' style={{ visibility: hiddensolution }}>
                    <ThreeVerticalLine borderLeft="5px solid white" />
                    <a href="/solution">{diamondresearch}</a>
                    <ThreeVerticalLine borderLeft="5px solid white" />
                </div>
            </div>
            {rows}
        </div>
    )
}

export default Solution