import { handleActions } from "redux-actions";
import { OURPROJECT } from "./ourProjectAction";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [OURPROJECT.GETALL]: () => ({
    isLoading: true,
  }),
  [OURPROJECT.GETALL_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [OURPROJECT.GETALL_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);