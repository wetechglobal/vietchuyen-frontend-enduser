import { createAction } from "redux-actions";
export const HOME = {
    GETALL: "HOME_GETALL",
    GETALL_SUCCESS: "HOME_GETALL_SUCCESS",
    GETALL_FAILURE: "HOME_GETALL_FAILURE",
    GETBYID: "HOME_GETBYID",
    GETBYID_SUCCESS: "HOME_GETBYID_SUCCESS",
    GETBYID_FAILURE: "HOME_GETBYID_FAILURE",
    CHANGE_STATUS: "HOME_CHANGE_STATUS",
    CHANGE_STATUS_SUCCESS: "HOME_CHANGE_STATUS_SUCCESS",
    CHANGE_STATUS_FAILURE: "HOME_CHANGE_STATUS_FAILURE",
    DELETE: "HOME_DELETE",
    DELETE_SUCCESS: "HOME_DELETE_SUCCESS",
    DELETE_FAILURE: "HOME_DELETE_FAILURE",
    ADD: "HOME_ADD",
    ADD_SUCCESS: "HOME_ADD_SUCCESS",
    ADD_FAILURE: "HOME_ADD_FAILURE",
    EDIT: "HOME_EDIT",
    EDIT_SUCCESS: "HOME_EDIT_SUCCESS",
    EDIT_FAILURE: "HOME_EDIT_FAILURE",
};
export const getAllHomesAction = createAction(HOME.GETALL);
export const getAllHomesSuccessAction = createAction(HOME.GETALL_SUCCESS);
export const getAllHomesFailureAction = createAction(HOME.GETALL_FAILURE);

export const getByIdHomeAction = createAction(HOME.GETBYID);
export const getByIdHomeSuccessAction = createAction(HOME.GETBYID_SUCCESS);
export const getByIdHomeFailureAction = createAction(HOME.GETBYID_FAILURE);