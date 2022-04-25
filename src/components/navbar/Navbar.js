import React, { useState, useRef } from "react";
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
    const nav = useRef()
    function navClose() {
        if (x.matches) {
            nav.current.style.display = "none";
        }
        else{
            
        }
    }
    function open() {
        nav.current.style.display = "block";
        setclick(!click)
    }
    const x = window.matchMedia("(max-width: 56.25em");
    return (
        <>
            <header>
                <div className="navLogo">DEJJ</div>
                <nav className={click ? "navactive" : "nav"} ref={nav}>
                    <ul className={click ? "navmenu active" : "navmenu"} >
                        {Menuitems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a onClick={navClose} className={item.cname} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
       
                    <div className="socialIcons">
                        <AiFillGithub className="icon" />
                        <AiFillLinkedin className="icon" />
                        <AiFillTwitterSquare className="icon" />
                    </div>
                </nav>
                <div className="menuIcon" onClick={handleClick}>
                        {click ? (
                            <FaTimes className="close" />
                        ) : (
                            <BiMenuAltRight className="menuIcon" onClick={open}/>
                        )}
                    </div>
            </header>
        </>
    );
};

export default Navbar;
