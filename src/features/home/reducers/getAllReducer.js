import { handleActions } from "redux-actions";
import { HOME } from "../homeAction";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [HOME.GETALL]: () => ({
    isLoading: true,
  }),
  [HOME.GETALL_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [HOME.GETALL_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);