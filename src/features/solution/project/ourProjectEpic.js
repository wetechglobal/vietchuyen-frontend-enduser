import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { OURPROJECT } from './ourProjectAction';
import {
    getAllOurProjectsSuccessAction,
    getAllOurProjectsFailureAction
} from './ourProjectAction';
import config from 'common/config';

const API_GETALL = config.HOST + config.VERSION + '/OurProject/GetAll?languageCode=';

// GETALL
const getAllOurProjectEpic = action$ => action$.pipe(
    ofType(OURPROJECT.GETALL),
    mergeMap((action) => {
        return ajax.getJSON(API_GETALL + action.payload + '&status=1', config.HEADERS()).pipe(
            map(response => getAllOurProjectsSuccessAction(response)),
            catchError(error => of(getAllOurProjectsFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

export { getAllOurProjectEpic };