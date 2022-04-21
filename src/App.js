// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./sass/main.scss";
import Navbar from './components/navbar/Navbar'
import Project from "./components/project/Project";
function App() {
    return (
        <>
        <Navbar/>
        <Project/>
        </>
    );
}

export default App;
