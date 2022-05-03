import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, {useEffect, useRef} from "react";
import "../../sass/main.scss";
import "./about.scss";
const About = () => {
    gsap.registerPlugin(ScrollTrigger)
    const about = useRef()
    const ref = useRef(null)
    const triggerAnim = useRef()
    const aside = useRef()
    // // const element = ref.current;
    // useEffect(() => {
 
    //     gsap.to(about.current, {
    //         y:0,
    //         opacity:1,
    //         duration: .4,
    //         scrollTrigger :{
    //             trigger: triggerAnim.current,
    //             start: "top top",
    //             end: "bottom center",
    //             scrub: true
    //         }
    //     })

    // }, [])

    // useEffect(() => {
    //     gsap.fromTo(aside.current,{x: 100, opacity: 0}, {
    //         x:0,
    //         opacity:1,
    //         duration: .4,
    //         scrollTrigger :{
    //             trigger: triggerAnim.current,
    //             start: "top top",
    //             end: "bottom",
    //             scrub: true
    //         }
    //     })
    // }, [])
    return (
        <div id="about" ref={ref}>
            <h3 className="heading-2 mb-m section-head"  ref={triggerAnim}>About -</h3>
            <div className="aboutContainer">
                <div className="aboutme">
                    <p className="potter" ref={about}>
                        I am Adejare, a frontend developer based in Lagos,
                        Nigeria focused on creating interactive and immersive
                        digital experiences on the web. I'm currently a student
                        of Computer Engineering in the Federal University of
                        Technology Akure. I am passionate about creating digital
                        products that makes people experience everday life and
                        not endure it.{" "}
                    </p>
                    <div className="btn" ref={about}>
                    <a className="mb-s" ref={about}>View Projects</a>
                    <a ref={about}>Contact Me</a>
                    </div>
                </div>
                <div className="aside">
                    <div className="stack" ref={aside}>
                        <h4 className="heading-4 mb-s sec-color">Stack.</h4>
                        <p >I work well with some of the most efficient technologies. Some are  </p>
                        <ul className="mb-m">
                            <li>HTML</li>
                            <li>SCSS</li>
                            <li>REACT</li>
                            <li>GSAP</li>
                            <li>FRAMER MOTION</li>
                            <li>TAILWIND CSS</li>
                        </ul>
                       
                    </div>
                    <div className="icebreakers" >
                        <h4 className="heading-4 mb-s sec-color">Icebreakers.</h4>
                        <p className="mb-l">
                            I listen to Alt and Nigerian music all the time,
                            here's my <a>PROFILE</a> on spotify. I love
                            traveling, taking pictures, meeting new people ad
                            trying new foods. (work with me so i can fund this).
                            GET IN TOUCH to know more about me.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
