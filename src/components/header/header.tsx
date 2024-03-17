import './header.css';
import title from './assets/Titel.png'
import { NavLink } from 'react-router-dom';

function Header(){
  return (
    <>
      <header>
        <div className='title-container'><img tabIndex={0} src={title} alt="Jobchaser logo" /></div>
        <nav>
          <li>
            <NavLink to='/Jobchaser/'>Home</NavLink>
            </li>
          <li>
            <NavLink to='/Jobchaser/Find-job'>Find Job</NavLink>
          </li>
          <li>
            <NavLink to='/Jobchaser/Post-job'>Post Job</NavLink>  
          </li>
        </nav>
      </header>
    </>
  )
}

export default Header; 