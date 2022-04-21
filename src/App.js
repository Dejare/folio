// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./sass/main.scss";
import Navbar from './components/navbar/Navbar'
import Project from "./components/project/Project";
import Footer from "./components/footer/Footer";
function App() {
    return (
        <>
        <Navbar/>
        <Project/>
        <Footer/>
        </>
    );
}

export default App;
