import { combineEpics } from 'redux-observable';
//SOLUTION
import { getAllSolutionEpic } from 'common/solution/solutionEpic';

//OURPROJECT
import { getAllOurProjectEpic } from 'features/solution/project/ourProjectEpic';


const rootEpic = combineEpics(
    //SOLUTION
    getAllSolutionEpic,

    //OURPROJECT
    getAllOurProjectEpic,

);
export default rootEpic;