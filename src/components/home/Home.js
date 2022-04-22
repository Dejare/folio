import React from "react";
import "../../sass/main.scss";
import "./home.scss";
import dejj from '../../image/dej.webp'

const Home = () => {
    return (
        <div id="home">
          <div className="heroImg">
            <img src={dejj}/>
          </div>
          
            <div className="herotext">
                <p className="paragraph">Heyy there, I'm</p>
                <h2 className="heading-2">Adejare.</h2>
                <h4 className="heading-4">Front-end Developer</h4>
                <div className="btn">
                    <button className="cta">About &rarr;</button>
                    <button className="cta">Projects &rarr;</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
