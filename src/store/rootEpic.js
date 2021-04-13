import { combineEpics } from 'redux-observable';
//SOLUTION
import { getAllSolutionEpic } from 'common/solution/solutionEpic';


const rootEpic = combineEpics(
    //FILE
    getAllSolutionEpic,

);
export default rootEpic;