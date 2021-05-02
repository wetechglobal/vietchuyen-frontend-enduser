import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { OURCUSTOMER } from './ourCustomerAction';
import {
    getAllOurCustomersSuccessAction,
    getAllOurCustomersFailureAction
} from './ourCustomerAction';
import config from 'common/config';

const API_GETALL = config.HOST + config.VERSION + '/OurCustomer/GetAll?languageCode=';

// GETALL
const getAllOurCustomerEpic = action$ => action$.pipe(
    ofType(OURCUSTOMER.GETALL),
    mergeMap((action) => {
        return ajax.getJSON(API_GETALL + action.payload + '&status=1', config.HEADERS()).pipe(
            map(response => getAllOurCustomersSuccessAction(response)),
            catchError(error => of(getAllOurCustomersFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

export { getAllOurCustomerEpic };