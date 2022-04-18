import React, { useState } from "react";
import { Menuitems } from "./Menuitems";
import "./navbar.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import {
    AiFillGithub,
    AiFillTwitterSquare,
    AiFillLinkedin,
} from "react-icons/ai";
const Navbar = () => {
    const [click, setclick] = useState(false);
    function handleClick() {
        setclick(!click);
    }
    return (
        <>
            <header>
                <div className="navLogo">DEJJ</div>
                <nav className={click ? "navactive" : "nav"}>
                    <ul className={click ? "navmenu active" : "navmenu"}>
                        {Menuitems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cname} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="menuIcon" onClick={handleClick}>
                        {click ? (
                            <FaTimes className="close" />
                        ) : (
                            <BiMenuAltRight className="menuIcon" />
                        )}
                    </div>
                    <div className="socialIcons">
                        <AiFillGithub className="icon" />
                        <AiFillLinkedin className="icon" />
                        <AiFillTwitterSquare className="icon" />
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
