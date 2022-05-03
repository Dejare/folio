import gsap from 'gsap/all'
import React, {useEffect, useRef} from 'react'
import {AiFillGithub, AiFillBehanceSquare} from 'react-icons/ai'
import './project.scss'

const Projectcard = ({projectNum, Name, projectImg, stack}) => {

    const card = useRef()
    useEffect(() => {
        // gsap.fromTo(card.current,{
        //     opacity: 0,
        //     y: 100
        // },{
        //     opacity: 1,
        //     y: 0,
        //     duration: 1.2
        // })
    }, [])
  
  return (
    <div className='projectCard' ref={card}>
        <div className='left'>
            <h4>{stack}</h4>
        </div>
        <div className='projectNum'>
            <img src={projectNum}/>
        </div>
        <div className='projectContent'>
            <div className='projectImg'>
                <img src={projectImg}/>
            </div>
            <div className='projectText'>
                <h3 className='mb-m heading-3'>{Name}</h3>
                <a href=''>Visit Site</a>
                <div className='socialIcons'>
                    <AiFillBehanceSquare/>
                    <AiFillGithub/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projectcard