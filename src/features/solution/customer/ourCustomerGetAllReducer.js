import { handleActions } from "redux-actions";
import { OURCUSTOMER } from "./ourCustomerAction";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [OURCUSTOMER.GETALL]: () => ({
    isLoading: true,
  }),
  [OURCUSTOMER.GETALL_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [OURCUSTOMER.GETALL_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);