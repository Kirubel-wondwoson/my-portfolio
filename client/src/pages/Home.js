import './Home.scss'
import React from "react"

import profile from '../assets/images/profile.jpg'

import Bttn from '../components/UI/Bttn.js'
const Home = () => {
  return (
    <div className='Home'>
      <div className='home-info'>
        <h3 className='name'>Hello, my name is <span>Kirubel Wondwoson</span></h3>
        <h3 className='profession'>I'm <span className='typing'>Web developer</span></h3>
        <p>Hey there! 👋 I'm Kirubel Wondwoson, a Junior MERN Stack developer and Linux System Administrator. I enjoy tackling complex challenges and delivering innovative solutions alongside skilled colleagues.</p>
        
        <Bttn />
      </div>
      <div className='home-img'>
        <img src={profile}/>
      </div>
    </div>
  )
}
export default Home