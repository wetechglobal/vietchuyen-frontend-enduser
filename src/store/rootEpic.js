import { combineEpics } from 'redux-observable';
//SOLUTION
import { getAllSolutionEpic } from 'common/solution/solutionEpic';

//OURPROJECT
import { getAllOurProjectEpic } from 'features/solution/project/ourProjectEpic';

//OURCUSTOMER
import { getAllOurCustomerEpic } from 'features/solution/customer/ourCustomerEpic';

const rootEpic = combineEpics(
    //SOLUTION
    getAllSolutionEpic,

    //OURPROJECT
    getAllOurProjectEpic,

    //OURCUSTOMER
    getAllOurCustomerEpic

);
export default rootEpic;