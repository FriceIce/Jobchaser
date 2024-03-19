import './header.css';
import title from './assets/Titel.png'
import { NavLink } from 'react-router-dom';

function Header(){

  return (
    <>
      <header>
        <div className="header-container">
          <div className='title-container'><img tabIndex={0} src={title} alt="Jobchaser logo" /></div>
          <nav>
            <li>
              <NavLink to='/Jobchaser'>Home</NavLink>
              </li>
            <li>
              <NavLink to='/Jobchaser/Find-job'>Find Job</NavLink>
            </li>
            <li>
              <NavLink to='/Post-job'>Post Job</NavLink>
            </li>
            <li>
              <NavLink to='/Jobchaser/Sign-in'>Sign In</NavLink>
            </li>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header; 