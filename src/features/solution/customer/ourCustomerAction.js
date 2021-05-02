import { createAction } from "redux-actions";
export const OURCUSTOMER = {
    GETALL: "OURCUSTOMER_GETALL",
    GETALL_SUCCESS: "OURCUSTOMER_GETALL_SUCCESS",
    GETALL_FAILURE: "OURCUSTOMER_GETALL_FAILURE"
};
export const getAllOurCustomersAction = createAction(OURCUSTOMER.GETALL);
export const getAllOurCustomersSuccessAction = createAction(OURCUSTOMER.GETALL_SUCCESS);
export const getAllOurCustomersFailureAction = createAction(OURCUSTOMER.GETALL_FAILURE);