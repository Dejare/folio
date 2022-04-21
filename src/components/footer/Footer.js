import React from 'react'
import './footer.scss'
import '../../sass/main.scss'
import {
    AiFillGithub,
    AiFillTwitterSquare,
    AiFillLinkedin,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div id='contact'>
        <div className='intro'>
            <h2 className='heading-2 mb-s'>Contact -</h2>
            
            <p className='mb-l paragraph'>Thanks for stopping by, I'm currently looking to join a new team of creative designers and developers. If you think we might be a good fit for one another, please reach out to me. <br/> Got a question, proposal or project? Or want to work together on something? Feel free to reach out</p>
        </div>
        <div className='contactcontainer'>
            <h2 className='contactanim mb-s'>WANNA BE STARTING SOMETHING?</h2>
            <a>dejaredaniels@gmail.com</a>
        </div>
        <div className='footer'>
            <div>
                <p>LAGOS, NG</p>
            </div>
            <div className="socialIcons">
                <AiFillGithub className='icon'/>
                <AiFillLinkedin className='icon'/>
                <AiFillTwitterSquare className='icon'/>
            </div>
            <div className='paragraph'>
                &copy; 2022 <br/>
                Dejare
            </div>
        </div>
    </div>
  )
}

export default Footer