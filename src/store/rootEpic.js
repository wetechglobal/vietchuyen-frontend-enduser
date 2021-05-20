import { combineEpics } from 'redux-observable';
//SOLUTION
import { getAllSolutionEpic } from 'common/solution/solutionEpic';

//OURPROJECT
import { getAllOurProjectEpic } from 'features/solution/project/ourProjectEpic';

//OURCUSTOMER
import { getAllOurCustomerEpic } from 'features/solution/customer/ourCustomerEpic';

//NEWS
import { getAllNewsEpic, getAllCategoryEpic } from 'features/news/newsEpic';

const rootEpic = combineEpics(
    //SOLUTION
    getAllSolutionEpic,

    //OURPROJECT
    getAllOurProjectEpic,

    //OURCUSTOMER
    getAllOurCustomerEpic,

    //NEWS
    getAllNewsEpic,
    getAllCategoryEpic

);
export default rootEpic;