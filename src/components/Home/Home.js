import React from 'react'
import Navbar from '../navbar/Navbar'
import './home.scss'
const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className='hero'>
          <div className='text'>
            <p>Adejare Adesida</p>
            <h1>Self-taught <span>Frontend Developer,</span></h1>
            <div>
            <h1>School-taught <span>Computer Engineer.</span></h1>
            <p>I build websites with a focus on responsive design and accessibility.</p>
            </div>
           </div>
        </div>
            <div>
                <footer>
                    &copy; 2022 <br/>
                    -Adejare | Design & Development
                </footer>
            </div>
    </div>
  )
}

export default Home