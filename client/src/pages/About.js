import './pages.scss'
import './About.scss'

import { Link } from 'react-router-dom'
import Skills from '../components/Skills'
const About = () => {
  return (
    <div className='about section'>
      <div className='container padd-30'>
        <div className='row'>
          <div className='title'><h2>About me</h2></div>
        </div>
        <div className='row'>
          <div className='about-text'>
            <h3>I'm Kirubel and <span>Web developer</span></h3>
            <p>I'm a passionate web developer with a background in C++, Java, and MySQL. Currently a Software Engineering student at AASTU, I leverage my programming knowledge to build creative and functional web experiences. Let's collaborate on your next project!</p>
          </div>

        </div>
        <h3>Personal Details</h3>
        <div className='row'>
          <div className='personal-info padd-30'>
            <div className='line'>
              <div className='info-item'>
                <p>Name: <span>Kirubel Wondwoson</span></p>
              </div>
              <div className='info-item'>
                <p>Email: <span><Link to="mailto:kirubelwondwoson635@gmail.com">kiurbelwondwoson635@gmail.com</Link></span></p>
              </div>
            </div>
            <div className='line'>
              <div className='info-item'>
                <p>Residence: <span>Ethiopia</span></p>
              </div>
              <div className='info-item'>
                <p>City: <span>Addis Ababa</span></p>
              </div>
            </div>
            <div className='line'>
              <div className='info-item'>
                <p>Freelance: <span>Hire me on <span><Link to="https://www.upwork.com/freelancers/~01ce72033e8353b9b5" target='_blank'>Upwork</Link></span></span></p>
              </div>
              <div className='info-item'>
                <p>Phone: <span>+251 987324228</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='button'>
            <button className='bttn'><Link>Download Resume</Link></button>
            <button className='bttn'><Link to="/Contact">Hire me</Link></button>
          </div>
        </div>
        <div className='row'>
          <div className='skills'>
            <Skills />
          </div>
        </div>
      </div>
    </div>
  )
}
export default About