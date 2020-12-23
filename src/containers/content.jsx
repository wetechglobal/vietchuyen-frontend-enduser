
import { Switch, Route } from "react-router-dom";
import About from 'features/about/index';
import Home from 'features/home/index';
import Contact from 'features/contact/index';
import News from 'features/news/index';
import Solution from 'features/solution/index';

const TheContent = () => {

    return (
        <Switch>
            <Route path="/about"> <About /> </Route>
            <Route path="/solution"> <Solution /> </Route>
            <Route path="/news"> <News /> </Route>
            <Route path="/contact"> <Contact /> </Route>
            <Route path="/"> <Home /> </Route>
        </Switch>
    );
}
export default TheContent
