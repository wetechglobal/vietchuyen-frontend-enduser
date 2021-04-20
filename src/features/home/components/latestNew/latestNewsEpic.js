import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { LATESTNEWS } from './latestNewsAction';
import {
    getAllLatestNewsSuccessAction,
    getAllLatestNewsFailureAction,
    getByIdLatestNewsSuccessAction,
    getByIdLatestNewsFailureAction} from './latestNewsAction';
import config from 'common/config';

const API_GETALL = config.HOST + config.VERSION + '/LatestNews/GetAll';
const API_GETBYID = config.HOST + config.VERSION + '/LatestNews/GetById?id=';

// GETALL
const getAllLatestNewsEpic = action$ => action$.pipe(
    ofType(LATESTNEWS.GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, config.HEADERS()).pipe(
            map(response => getAllLatestNewsSuccessAction(response)),
            catchError(error => of(getAllLatestNewsFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

// GETBYID
const getByIdLatestNewsEpic = action$ => action$.pipe(
    ofType(LATESTNEWS.GETBYID),
    mergeMap((action) => {
        return ajax.getJSON(API_GETBYID + action.payload, config.HEADERS()).pipe(
            map(response => getByIdLatestNewsSuccessAction(response)),
            catchError(error => of(getByIdLatestNewsFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);


export { getAllLatestNewsEpic, getByIdLatestNewsEpic };