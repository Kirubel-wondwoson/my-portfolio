import React from "react"
import { useState, useEffect } from 'react'
import profile from '../assets/images/profile.jpg'
import Bttn from '../components/UI/Bttn.js'

import './pages.scss'
import './Home.scss'

function DisplayOneAtATime() {
  const items = ['Web Developer', 'SWE Student', 'Math Enthusast'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex   
 + 1) % items.length);
    }, 1500); // Adjust the interval time as needed

    return () => clearInterval(intervalId);
  }, []);

  return items[currentIndex]

}
const Home = () => {
  return (
    <div className='Home padd-30'>
      <div className='home-info'>
        <h3 className='name'>Hello, my name is <span>Kirubel Wondwoson</span></h3>
        <h3 className='profession'>I'm <span className='typing'><DisplayOneAtATime /></span></h3>
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