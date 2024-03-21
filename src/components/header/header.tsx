// @ts-nocheck
import './header.css';
import title from './assets/Titel.png'
import { NavLink } from 'react-router-dom';

function Header({userOnline}){

  return (
    <>
      <header>
        <div className="header-container">
          <div className='title-container'><img tabIndex={0} src={title} alt="Jobchaser logo" /></div>
          <nav>
            <ul className='link-options'>
              <li>
                <NavLink to='/Jobchaser/'>Home</NavLink>
                </li>
              <li>
                <NavLink to='/Jobchaser/Find-job'>Find Job</NavLink>
              </li>
             
              <li>
                {userOnline ? <NavLink to='/Jobchaser/Sign-out'>Sign Out [ {userOnline.displayName} ]</NavLink> : <NavLink to='/Jobchaser/Sign-in'>Sign In</NavLink>}
              </li>

            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header; 