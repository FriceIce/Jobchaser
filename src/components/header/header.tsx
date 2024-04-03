// @ts-nocheck
import './css/header.css';
import './css/menu.css'

// icon
import whiteChevron from './assets/chevron-right-white.svg'
import blackChevron from './assets/chevron-right-black.svg'
import titleLight from './assets/jobchaser-logo-darkmode.svg'
import titleDark from './assets/jobchaser-logo-lightmode.svg'
import anonymousUser from './assets/anonymous-user.svg'
import signOutWhite from './assets/sign-out-white.svg'
import signOutBlack from './assets/sign-out-black.svg'

import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../App';
import firebaseSignIn from '../../../database/firebase';
import { useLocation } from 'react-router-dom';

function Header({toggleDarkTheme}){
  // useContext
  const { 
    isOnline, 
    isDarkTheme, 
    background, 
    color, 
    textColorHeader
  } = useContext(Context);

  
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
  const [marginBottom, setMarginBottom] = useState('none');
  
  
  const mediaWith = window.matchMedia('(width < 1249px)'); 
  const mediaHeight = window.matchMedia('(height < 801px)'); 
  const bodyElement = document.body; 
  
  // Without this line the background color is acting weird. 
  bodyElement.style.background = isDarkTheme ? 'linear-gradient(147deg, #4d4855 0%, #000000 74%)' : 'whitesmoke'
  
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
    const root = document.getElementById('root')
    if(isDarkTheme) {
      bodyElement.style.background = 'linear-gradient(147deg, #4d4855 0%, #000000 74%)';
      return
    } 
    if(!isDarkTheme){
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
  
  function jobchaserLogo(menu){
    if(menu === null) return textColorHeader === 'white' ? titleDark : titleLight
    return isDarkTheme ? titleDark : titleLight; 
  }

  function toggleSignOutIcon(screen){
    if(screen) return color ? signOutWhite : signOutBlack;
    if(!screen) return textColorHeader === 'white' ? signOutWhite : signOutBlack;

  }
  return (
    <>
      <header>
        <div className="header-container">
          <div className='title-container' style={{color: menuClass ? color : textColorHeader}}>
            <img tabIndex={0}  src={jobchaserLogo(menuClass)} alt="Jobchaser logo" />
            <p>Jobchaser</p>
            <p>EST 2023</p>
          </div>

          <div onClick={toggleMenu} className='menu'>
            <div style={{background: menuClass ? color : textColorHeader}} className="bar"></div>
            <input style={{background: menuClass ? color : textColorHeader}} checked={checked} type='checkbox' className="bar"/>
            <div style={{background: menuClass ? color : textColorHeader}} className="bar"></div>
            <p style={{color: menuClass ? color : textColorHeader}}>Menu</p>
          </div>
          
       
          <nav onClick={toggleMenu} className={`link-options ${menuClass}`} style={{transition: styleTransition, background: isMobileScreen && background }}>

            <button style={{color: menuClass ? color : textColorHeader, marginBottom: menuClass && marginBottom, border: isMobileScreen ? `1px solid ${color}` : `1px solid ${textColorHeader}`}} onClick={toggleBgTheme}>
              {isDarkTheme ? 'Light Theme' : 'Dark Theme' }
            </button>

            {/* Skapa komponeter till dessa Link taggar för att minska på koden */}
            <Link style={{color: isMobileScreen ? color : textColorHeader}} to='/Jobchaser/'>
              Hem 
              {isMobileScreen && <img className='chevron' src={!isDarkTheme ? blackChevron : whiteChevron} alt="chevron icon" />}</Link>
            <Link style={{color: isMobileScreen ? color : textColorHeader}} to='/Jobchaser/Find-job'>
              Lediga jobb
              {isMobileScreen && <img className='chevron' src={!isDarkTheme ? blackChevron : whiteChevron} alt="chevron icon" />}
            </Link>

            {isOnline && 
            <Link to={'/Jobchaser/User-profile'} style={{color: isMobileScreen ? color : textColorHeader}}>
              <div className='profile-container'>
                <p>Profil</p>
                <img src={isOnline.profileImg ? isOnline.profileImg : anonymousUser} alt="user profile picture" style={{border: '2px solid ' + (menuClass ? color : textColorHeader)}}/>
              </div>

              {isMobileScreen && <img style={{bottom: '30%'}} className='chevron' src={!isDarkTheme ? blackChevron : whiteChevron} alt="chevron icon" />}
            </Link>}

            {isOnline ? 
            <div onClick={() => auth.signOut()} className="sign-out-cont">
              <button className='sign-out-btn' style={{color: isMobileScreen ? color : textColorHeader}}>
                Logga ut
              </button>
              <div className="sign-out-img-container">
                <img src={toggleSignOutIcon(isMobileScreen)} alt="sign out icon" />
              </div>
            </div> : 
            <Link style={{color: isMobileScreen ? color : textColorHeader}} to='/Jobchaser/Sign-in'>
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