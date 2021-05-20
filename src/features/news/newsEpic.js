import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { NEWS } from './newsAction';
import {
    getAllNewsSuccessAction,
    getAllNewsFailureAction,
    getAllCategorySuccessAction,
    getAllCategoryFailureAction

} from './newsAction';
import config from 'common/config';

const API_GETALL = config.HOST + config.VERSION + '/CmsArticle/GetAll?languageCode=';
const API_GETCATEGORYALL = config.HOST + config.VERSION + '/CmsCategory/GetAll?languageCode=';

// GETALL
const getAllNewsEpic = action$ => action$.pipe(
    ofType(NEWS.GETALL),
    mergeMap((action) => {
        return ajax.getJSON(API_GETALL + action.payload + '&status=1', config.HEADERS()).pipe(
            map(response => getAllNewsSuccessAction(response)),
            catchError(error => of(getAllNewsFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

// GETCATEGORYALL
const getAllCategoryEpic = action$ => action$.pipe(
    ofType(NEWS.GETCATEGORYALL),
    mergeMap((action) => {
        return ajax.getJSON(API_GETCATEGORYALL + action.payload + '&status=1', config.HEADERS()).pipe(
            map(response => getAllCategorySuccessAction(response)),
            catchError(error => of(getAllCategoryFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

export { getAllNewsEpic, getAllCategoryEpic };