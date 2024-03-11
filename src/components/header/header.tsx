import './header.css';
import title from './assets/Titel.png'

function Header(){
  return (
    <>
      <header>
        <div className='title-container'><img tabIndex={0} src={title} alt="Jobchaser logo" /></div>
      </header>
    </>
  )
}

export default Header; 