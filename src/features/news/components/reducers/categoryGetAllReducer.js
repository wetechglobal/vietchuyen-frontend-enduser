import { handleActions } from "redux-actions";
import { NEWS } from "../../newsAction";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [NEWS.GETCATEGORYALL]: () => ({
    isLoading: true,
  }),
  [NEWS.GETCATEGORYALL_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [NEWS.GETCATEGORYALL_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);