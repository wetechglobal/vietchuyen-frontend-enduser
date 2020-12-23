import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr'

//FILE
//import getAllFilesReducer from 'features/file/reducers/getAllReducer';

export default combineReducers({
    toastr: toastrReducer,
    
    //FILE
    //getAllFilesReducer,

});