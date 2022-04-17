import React from 'react'
import Navbar from '../navbar/Navbar'
import './home.scss'
const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className='hero'><h1>
            DEJJ
            </h1></div>
            <div>
                <footer>
                    &copy; 2022 <br/>
                    -WAGMI
                </footer>
            </div>
    </div>
  )
}

export default Home