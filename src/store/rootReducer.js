import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr'

//SOLUTION
import solutionGetAllReducer from 'common/solution/solutionGetAllReducer';

//OURPROJECT
import ourProjectGetAllReducer from 'features/solution/project/ourProjectGetAllReducer';

export default combineReducers({
    toastr: toastrReducer,
    
    //SOLUTION
    solutionGetAllReducer,

    //OURPROJECT
    ourProjectGetAllReducer,

});