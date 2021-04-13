import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { SOLUTION } from './solutionAction';
import {
    getAllSolutionsSuccessAction,
    getAllSolutionsFailureAction
} from './solutionAction';
import config from 'common/config';

const API_GETALL = config.HOST + config.VERSION + '/SolutionProduct/GetAll';

// GETALL
const getAllSolutionEpic = action$ => action$.pipe(
    ofType(SOLUTION.GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, config.HEADERS()).pipe(
            map(response => getAllSolutionsSuccessAction(response)),
            catchError(error => of(getAllSolutionsFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

export { getAllSolutionEpic };