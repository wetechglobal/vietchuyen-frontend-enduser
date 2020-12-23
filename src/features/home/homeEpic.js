// import { of } from 'rxjs';
// import { ajax } from 'rxjs/ajax';
// import { map, mergeMap, catchError } from 'rxjs/operators';
// import { ofType } from 'redux-observable';
// import { HOME } from './homeAction';
// import {
//     getAllHomesSuccessAction,
//     getAllHomesFailureAction,
//     getByIdHomeSuccessAction,
//     getByIdHomeFailureAction,
//     changeStatusHomeSuccessAction,
//     changeStatusHomeFailureAction,
//     deleteHomeSuccessAction,
//     deleteHomeFailureAction,
//     addHomeSuccessAction,
//     addHomeFailureAction,
//     editHomeSuccessAction,
//     editHomeFailureAction
// } from './homeAction';
// import config from 'common/config';

// const API_GETALL = config.HOST + config.VERSION + '/Home/GetAll';
// const API_GETBYID = config.HOST + config.VERSION + '/Home/GetById?id=';
// const API_CHANGE_STATUS = config.HOST + config.VERSION + '/Home/ChangeStatus/';
// const API_DELETE = config.HOST + config.VERSION + '/Home/Delete/';
// const API_ADD = config.HOST + config.VERSION + '/Home/Create';
// const API_EDIT = config.HOST + config.VERSION + '/Home/Update';

// // GETALL
// const getAllHomeEpic = action$ => action$.pipe(
//     ofType(HOME.GETALL),
//     mergeMap(() => {
//         return ajax.getJSON(API_GETALL, config.HEADERS()).pipe(
//             map(response => getAllHomesSuccessAction(response)),
//             catchError(error => of(getAllHomesFailureAction({
//                 message: error.xhr.response, status: error.xhr.status
//             })))
//         )
//     })
// );

// // GETBYID
// const getByIdHomeEpic = action$ => action$.pipe(
//     ofType(HOME.GETBYID),
//     mergeMap((action) => {
//         return ajax.getJSON(API_GETBYID + action.payload, config.HEADERS()).pipe(
//             map(response => getByIdHomeSuccessAction(response)),
//             catchError(error => of(getByIdHomeFailureAction({
//                 message: error.xhr.response, status: error.xhr.status
//             })))
//         )
//     })
// );

// // CHANGE STATUS
// const changeStatusHomeEpic = action$ => action$.pipe(
//     ofType(HOME.CHANGE_STATUS),
//     mergeMap((action) => {
//         return ajax.put(API_CHANGE_STATUS + action.payload, config.HEADERS()).pipe(
//             map(response => changeStatusHomeSuccessAction(response)),
//             catchError(error => of(changeStatusHomeFailureAction({
//                 message: error.xhr.response, status: error.xhr.status
//             })))
//         )
//     })
// );

// // DELETE
// const deleteHomeEpic = action$ => action$.pipe(
//     ofType(HOME.DELETE),
//     mergeMap((action) => {
//         return ajax.put(API_DELETE + action.payload, config.HEADERS()).pipe(
//             map(response => deleteHomeSuccessAction(response)),
//             catchError(error => of(deleteHomeFailureAction({
//                 message: error.xhr.response, status: error.xhr.status
//             })))
//         )
//     })
// );

// // ADD
// const addHomeEpic = action$ => action$.pipe(
//     ofType(HOME.ADD),
//     mergeMap((action) => {
//         return ajax.post(API_ADD, action.payload, config.HEADERS()).pipe(
//             map(response => addHomeSuccessAction(response)),
//             catchError(error => of(addHomeFailureAction({
//                 message: error.xhr.response, status: error.xhr.status
//             })))
//         )
//     })
// );

// // EDIT
// const editHomeEpic = action$ => action$.pipe(
//     ofType(HOME.EDIT),
//     mergeMap((action) => {
//         return ajax.put(API_EDIT, action.payload, config.HEADERS()).pipe(
//             map(response => editHomeSuccessAction(response)),
//             catchError(error => of(editHomeFailureAction({
//                 message: error.xhr.response, status: error.xhr.status
//             })))
//         )
//     })
// );

// export { getAllHomeEpic, changeStatusHomeEpic, deleteHomeEpic, addHomeEpic, editHomeEpic, getByIdHomeEpic };