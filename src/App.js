// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./sass/main.scss";
import Navbar from './components/navbar/Navbar'
import Project from "./components/project/Project";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Home from "./components/home/Home";
function App() {
    return (
        <>
          <div className="homeAnimations">
                    <div className="triangle" />
                    <div className="square" />
                    <div className="bigCircle" />
                    <div className="bottomleft">
                        <div className="smaller" />
                    </div>
                </div>
        <Navbar/>
        <Home/>
        <About/>
        <Project/>
        <Footer/>
        </>
    );
}

export default App;
