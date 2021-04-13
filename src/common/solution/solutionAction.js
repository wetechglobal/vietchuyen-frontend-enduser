import { createAction } from "redux-actions";
export const SOLUTION = {
    GETALL: "SOLUTION_GETALL",
    GETALL_SUCCESS: "SOLUTION_GETALL_SUCCESS",
    GETALL_FAILURE: "SOLUTION_GETALL_FAILURE"
};
export const getAllSolutionsAction = createAction(SOLUTION.GETALL);
export const getAllSolutionsSuccessAction = createAction(SOLUTION.GETALL_SUCCESS);
export const getAllSolutionsFailureAction = createAction(SOLUTION.GETALL_FAILURE);