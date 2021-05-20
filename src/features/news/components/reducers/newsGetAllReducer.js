import { handleActions } from "redux-actions";
import { NEWS } from "../../newsAction";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [NEWS.GETALL]: () => ({
    isLoading: true,
  }),
  [NEWS.GETALL_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [NEWS.GETALL_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);