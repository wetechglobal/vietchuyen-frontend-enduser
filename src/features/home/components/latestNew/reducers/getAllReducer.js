import { handleActions } from "redux-actions";
import { LATESTNEWS } from "../latestNewsAction";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [LATESTNEWS.GETALL]: () => ({
    isLoading: true,
  }),
  [LATESTNEWS.GETALL_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [LATESTNEWS.GETALL_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);