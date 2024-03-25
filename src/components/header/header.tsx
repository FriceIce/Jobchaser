// @ts-nocheck
import './css/header.css';
import './css/menu.css'
import whiteChevron from './assets/chevron-right-white.svg'
import blackChevron from './assets/chevron-right-black.svg'
import titleLight from './assets/jobchaser-logo-darkmode.svg'
import titleDark from './assets/jobchaser-logo-lightmode.svg'
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../App';
import firebaseSignIn from '../../pages/Sign in/firebase';

function Header({toggleDarkTheme}){
  // useContext
  const {isOnline, isDarkTheme, bgTheme, color} = useContext(Context);
  const [menuBarColor, setMenuBarColor] = useState({}); 

  
  const {auth, signOut} = firebaseSignIn();

  // toggle Dark theme
  function toggleBgTheme(){
    toggleDarkTheme((prevTheme => !prevTheme)); 
    return
  }
  
  // ---------menu--------
  const [isMobileScreen, setIsMobileScreen] = useState(false)
  const [menuClass, setMenuClass] = useState(null);
  const [checked, setChecked] = useState(false);
  const [styleTransition, setStyleTransition] = useState('none'); 
  const [timeoutId, setTimeoutId] = useState();
  const [marginBottom, setMarginBottom] = useState('none') 
  
  
  const mediaWith = window.matchMedia('(width < 1001px)'); 
  const mediaHeight = window.matchMedia('(height < 801px)'); 
  const bodyElement = document.body; 
  
  
  
  function toggleMenu(element){   
    if(!mediaWith.matches || element.target.tagName === 'BUTTON') return
    
    if(menuClass){
      if(timeoutId){
        clearTimeout(timeoutId); 
        setTimeoutId(setTimeout(() => setStyleTransition('none'), 350));
      } else {
        setTimeoutId(setTimeout(() => setStyleTransition('none'), 350));
      }
      
      bodyElement.removeAttribute('style');
      setChecked(false);
      setMenuClass(null);
      return 
    } 
    
    if(menuClass === null){
      setStyleTransition('translate 350ms')
      bodyElement.style.overflow = 'hidden'
      setChecked(true);
      setMenuClass('show-menu');
      return 
    } 
  }


  useEffect(() => {
    if(isDarkTheme) {
      setMenuBarColor({background: 'white'});
      bodyElement.style.background = '#1e1e1e';
      return
    } 
    if(!isDarkTheme){
      setMenuBarColor({})
      bodyElement.style.background = 'whitesmoke';
      return 
    } 
  }, [isDarkTheme])
  

  useEffect(() => {
    if(mediaWith.matches) setIsMobileScreen(true); 

    mediaWith.addEventListener('change', (e) => {
      if(!e.matches) {
        console.log('desktop')
        bodyElement.removeAttribute('style');
        setIsMobileScreen(false);
        setChecked(false)
        setMenuClass(null)
        setStyleTransition('none')
        return
      }
      setIsMobileScreen(true);
    })
    
    mediaHeight.addEventListener('change', (e) => {
      if(e.matches) setMarginBottom('-120px');
      if(!e.matches) setMarginBottom('0px');
      return 
    })
    
    
    return () => {}
  }, [])
  // --------------------
  
  return (
    <>
      <header style={bgTheme}>
        <div className="header-container">
          <div className='title-container'>
            <img tabIndex={0} src={isDarkTheme ? titleDark : titleLight} alt="Jobchaser logo" />
            <p>Jobchaser</p>
            <p>EST 2023</p>
          </div>

          <div onClick={toggleMenu} className='menu'>
            <div style={menuBarColor} className="bar"></div>
            <input style={menuBarColor} checked={checked} type='checkbox' className="bar"/>
            <div style={menuBarColor} className="bar"></div>
          </div>
          
       
          <nav onClick={toggleMenu} className={`link-options ${menuClass}`} style={{transition: styleTransition, background: isDarkTheme ? '#1e1e1e' : 'whitesmoke'}}>

          <button style={{color: color, marginBottom: marginBottom, border: `1px solid ${color}`}} onClick={toggleBgTheme}>
            {isDarkTheme ? 'Light Theme' : 'Dark Theme' }
          </button>

            <Link style={{color: color}} to='/Jobchaser/'>
              Hem 
              {isMobileScreen && <img className='chevron' src={!isDarkTheme ? blackChevron : whiteChevron} alt="chevron icon" />}</Link>
            <Link style={{color: color}} to='/Jobchaser/Find-job'>
              Lediga jobb
              {isMobileScreen && <img className='chevron' src={!isDarkTheme ? blackChevron : whiteChevron} alt="chevron icon" />}
              </Link>

            {isOnline ? 
              <a style={{color: color}} onClick={() => signOut(auth)}>
                Logga ut [ {isOnline.displayName} ]
                {isMobileScreen && <img className='chevron' src={!isDarkTheme ? blackChevron : whiteChevron} alt="chevron icon" />}
                </a> : 
                <Link style={{color: color}} to='/Jobchaser/Sign-in'>
                  Logga in
                  {isMobileScreen && <img className='chevron' src={!isDarkTheme ? blackChevron : whiteChevron} alt="chevron icon" />}
                  </Link>}
          </nav>
     
        </div>
      </header>
    </>
  )
}

export default Header; 