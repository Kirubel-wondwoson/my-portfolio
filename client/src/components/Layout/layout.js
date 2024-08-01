import { Outlet, Link } from 'react-router-dom'
import './layout.scss'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHome, faUser, faBriefcase, faList,faComments } from '@fortawesome/free-solid-svg-icons';


const layout = () => {
    return(
      <div className='layout'>
        <nav className='aside'>
          <h4 className='logo'>
            <Link to="/"><span>K</span>irubel Wondwoson</Link>
          </h4>
          <ul>
            <li><Link to="/"><FontAwesomeIcon className="fa" icon={faHome}/>Home</Link></li>
            <li><Link to='/About'><FontAwesomeIcon className="fa" icon={faUser}/>About</Link></li>
            <li><Link to='/Services'><FontAwesomeIcon className="fa" icon={faList}/>Services</Link></li>
            <li><Link to='/Portfolio'><FontAwesomeIcon className="fa" icon={faBriefcase}/>Portfolio</Link></li>
            <li><Link to='/Contact'><FontAwesomeIcon className="fa" icon={faComments}/>Contact</Link></li>
          </ul>
        </nav>
        <main className='outlet'>
          <Outlet />
        </main>
      </div>
    )
}
export default layout
