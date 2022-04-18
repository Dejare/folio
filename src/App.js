import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/about/About";
import Home from "./components/Home/Home";
import "./main.scss";
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>

                <Route path="/about" exact>
                    <About/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
