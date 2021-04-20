import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr'

//SOLUTION
import solutuionGetAllReducer from 'common/solution/solutuionGetAllReducer';

export default combineReducers({
    toastr: toastrReducer,
    
    //SOLUTION
    solutuionGetAllReducer,

});