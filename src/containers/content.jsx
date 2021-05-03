
import { Switch, Route } from "react-router-dom";
import About from 'features/about/index';
import Home from 'features/home/index';
import Contact from 'features/contact/index';
import News from 'features/news/index';
import Details from 'features/news/details/index';
import Solution from 'features/solution/index';

const TheContent = () => {

    return (
        <div className="App">
        <Route path="/about" component={About}/>
        <Route path="/solution" component={Solution}/>
        <Route path="/news" exact component={News}/>
        <Route path="/news/details" component={Details}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/" exact component={Home}/>
        </div>
);
}
export default TheContent
