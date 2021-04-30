import { handleActions } from "redux-actions";
import { SOLUTION } from "./solutionAction";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [SOLUTION.GETALL]: () => ({
    isLoading: true,
  }),
  [SOLUTION.GETALL_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [SOLUTION.GETALL_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);