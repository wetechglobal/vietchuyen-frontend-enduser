import { createAction } from "redux-actions";
export const OURPROJECT = {
    GETALL: "OURPROJECT_GETALL",
    GETALL_SUCCESS: "OURPROJECT_GETALL_SUCCESS",
    GETALL_FAILURE: "OURPROJECT_GETALL_FAILURE"
};
export const getAllOurProjectsAction = createAction(OURPROJECT.GETALL);
export const getAllOurProjectsSuccessAction = createAction(OURPROJECT.GETALL_SUCCESS);
export const getAllOurProjectsFailureAction = createAction(OURPROJECT.GETALL_FAILURE);