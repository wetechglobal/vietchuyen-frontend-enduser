import { createAction } from "redux-actions";
export const NEWS = {
    GETALL: "NEWS_GETALL",
    GETALL_SUCCESS: "NEWS_GETALL_SUCCESS",
    GETALL_FAILURE: "NEWS_GETALL_FAILURE",

    GETCATEGORYALL: "NEWS_GETCATEGORYALL",
    GETCATEGORYALL_SUCCESS: "NEWS_GETCATEGORYALL_SUCCESS",
    GETCATEGORYALL_FAILURE: "NEWS_GETCATEGORYALL_FAILURE"
};
export const getAllNewsAction = createAction(NEWS.GETALL);
export const getAllNewsSuccessAction = createAction(NEWS.GETALL_SUCCESS);
export const getAllNewsFailureAction = createAction(NEWS.GETALL_FAILURE);

export const getAllCategoryAction = createAction(NEWS.GETCATEGORYALL);
export const getAllCategorySuccessAction = createAction(NEWS.GETCATEGORYALL_SUCCESS);
export const getAllCategoryFailureAction = createAction(NEWS.GETCATEGORYALL_FAILURE);