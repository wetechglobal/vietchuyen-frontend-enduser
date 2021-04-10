import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { HOME } from './homeAction';
import {
    getAllHomesSuccessAction,
    getAllHomesFailureAction,
    getByIdHomeSuccessAction,
    getByIdHomeFailureAction} from './homeAction';
import config from 'common/config';

const API_GETALL = config.HOST + config.VERSION + '/Home/GetAll';
const API_GETBYID = config.HOST + config.VERSION + '/Home/GetById?id=';

// GETALL
const getAllHomeEpic = action$ => action$.pipe(
    ofType(HOME.GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, config.HEADERS()).pipe(
            map(response => getAllHomesSuccessAction(response)),
            catchError(error => of(getAllHomesFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

// GETBYID
const getByIdHomeEpic = action$ => action$.pipe(
    ofType(HOME.GETBYID),
    mergeMap((action) => {
        return ajax.getJSON(API_GETBYID + action.payload, config.HEADERS()).pipe(
            map(response => getByIdHomeSuccessAction(response)),
            catchError(error => of(getByIdHomeFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);


export { getAllHomeEpic, getByIdHomeEpic };