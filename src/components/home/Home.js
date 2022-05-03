import React, { useEffect, useRef } from "react";
import "../../sass/main.scss";
import "./home.scss";
import dejj from "../../image/dej.webp";
import gsap from "gsap";
import homeImg from "../../image/dejj.png";
import sphere from "../../image/sphere.png";
// import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
// gsap.registerPlugin(ScrambleTextPlugin)
const Home = () => {
    // animation
    // write a landing page component
    return (
        <div id="home">
            <div>
                <div className="homeTexts">
                    <h3>FRONT END DEVELOPER </h3>
                    <h1>
                        I curate experiences <br /> with technology.
                    </h1>
                    <div className="homeCta">
                        <a href="#" className="homeAbout">
                            About Me
                        </a>{" "}
                        -{" "}
                        <a href="#" className="homeProjects">
                            My Projects
                        </a>
                    </div>
                    -
                </div>
            </div>
        </div>
    );
};

export default Home;
