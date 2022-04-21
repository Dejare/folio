import React from 'react'
import './project.scss'
import '../../sass/main.scss'
import Projectcard from './Projectcard'
import one from '../../image/01.svg'
import two from '../../image/02.svg'
import three from '../../image/03.svg'
import four from '../../image/04.svg'
import test from '../../image/projecttest.jpg'
import dej from '../../image/dej.webp'
import pexel from '../../image/pexel.jpg'
import weather from '../../image/weather.webp'
const Project = () => {
  return (
    <div id='project'>
        <div className='projecttext'>
            <h2 className='heading-2'>Project -</h2>
            <p>I have worked on a couple of projects, Here are some of my works.</p>
            <div className='projectCardContainer'>
                <Projectcard projectNum={one} Name="Portfolio V1." projectImg={dej} stack="React, SCSS, GSAP"/>
                <Projectcard  Name="WeatherApp" projectImg={weather} projectNum={two}/>
                <Projectcard Name="Gif-Zone" projectNum={three} projectImg={pexel}/>
                <Projectcard Name="Jiggy Life!" projectNum={four} projectImg={test} />
            </div>
        </div>
    </div>
  )
}

export default Project