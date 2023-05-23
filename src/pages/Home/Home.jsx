import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import Treding from './trending/Treding'
import './style.scss'
const Home = () => {
  return (
    <div className='homePage'>
       <HeroBanner/>
       <Treding/>
    </div>
  )
}

export default Home