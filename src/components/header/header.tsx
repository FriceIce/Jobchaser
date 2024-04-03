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

// useReducer
import { INTIAL_STATE, ACTION_TYPES, sideMenuReducer} from './sideMenuRedcuer';

// other
import { Link } from 'react-router-dom';
import { useContext, useEffect, useReducer, useState } from 'react';
import { Context } from '../../App';
import firebaseSignIn from '../../../database/firebase';
import { useLocation } from 'react-router-dom';
import SideMenu from './sideMenu/Sidemenu';
import HeaderOption from './headerOption/headerOption';

function Header({toggleDarkTheme}){
  // ---------side menu with useReducer hook--------
  const [state, dispatch] = useReducer(sideMenuReducer, INTIAL_STATE); 
  
  // useContext
  const { 
    isOnline, 
    isDarkTheme, 
    background, 
    color, 
    textColorHeader
  } = useContext(Context);

  // firebase auth for sign out
  const {auth, signOut} = firebaseSignIn();

  // varibles for addEventListener for screen size changes. 
  const mediaWith = window.matchMedia('(width < 1249px)'); 
  const mediaHeight = window.matchMedia('(height < 801px)'); 
  const bodyElement = document.body; 
  
  // Without this line the background color is acting weird. 
  bodyElement.style.background = isDarkTheme ? 'linear-gradient(147deg, #4d4855 0%, #000000 74%)' : 'whitesmoke'
  
  // toggle Dark theme
  function toggleBgTheme(){
    toggleDarkTheme((prevTheme => !prevTheme)); 
    return
  }
  // Open and close side menu
  function toggleMenu(element){   
    if(!mediaWith.matches || element.target.tagName === 'BUTTON') return
    
    if(state.menuClass){
      if(state.timeoutId){
        clearTimeout(state.timeoutId); 
        dispatch({type: ACTION_TYPES.TIMEOUT_ID, payload: setTimeout(() => 'none', 350)});
      } else {
        dispatch({type: ACTION_TYPES.TIMEOUT_ID, payload: setTimeout(() => 'none', 350)});
      }
      
      bodyElement.removeAttribute('style');
      dispatch({type: ACTION_TYPES.CHECKED, payload:false});
      dispatch({type: ACTION_TYPES.MENU_CLASS, payload: null});
      return 
    } 
    
    if(state.menuClass === null){
      dispatch({type: ACTION_TYPES.STYLE_TRANSITION, payload: 'translate 350ms'})
      bodyElement.style.overflow = 'hidden'
      dispatch({type: ACTION_TYPES.CHECKED, payload: true});
      dispatch({type: ACTION_TYPES.MENU_CLASS, payload: 'show-menu'});
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
  
  // addEventlisteners for screen size changes. 
  useEffect(() => {
    if(mediaWith.matches) dispatch({type: ACTION_TYPES.IS_MOBILE, payload: true}); 

    mediaWith.addEventListener('change', (e) => {
      if(!e.matches) {
        console.log('desktop')
        bodyElement.removeAttribute('style');
        dispatch({type: ACTION_TYPES.IS_MOBILE, payload: false});
        dispatch({type:ACTION_TYPES.CHECKED , payload: false}); 
        dispatch({type:ACTION_TYPES.MENU_CLASS , payload: null});
        dispatch({type:ACTION_TYPES.STYLE_TRANSITION , payload: 'none'});
        return
      }
      dispatch({type: ACTION_TYPES.IS_MOBILE, payload: true});
    })
    
    mediaHeight.addEventListener('change', (e) => {
      if(e.matches) dispatch({type: ACTION_TYPES.STYLE_BOTTOM,payload: '-120px'});
      if(!e.matches) dispatch({type: ACTION_TYPES.STYLE_BOTTOM,payload: '0px'});
      return 
    })
    
    
    return
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
          <div className='title-container' style={{color: state.menuClass ? color : textColorHeader}}>
            <img tabIndex={0}  src={jobchaserLogo(state.menuClass)} alt="Jobchaser logo" />
            <p>Jobchaser</p>
            <p>EST 2023</p>
          </div>

          <SideMenu 
            toggleMenu={toggleMenu} 
            menuClass={state.menuClass} 
            textColorHeader={textColorHeader} 
            checked={state.checked} color={color}
          />
          
          <nav 
            onClick={toggleMenu} 
            className={`link-options ${state.menuClass}`} style={{transition: state.styleTransition, background: state.isMobileScreen && background }}>

            <button 
              style={{color: state.menuClass ? color : textColorHeader, marginBottom: state.menuClass && state.marginBottom, border: state.isMobileScreen ? `1px solid ${color}` : `1px solid ${textColorHeader}`}} onClick={toggleBgTheme}>
                {isDarkTheme ? 'Light Theme' : 'Dark Theme' }
            </button>

            <HeaderOption 
              label='Hem' 
              className='chevron' 
              isMobileScreen={state.isMobileScreen} 
              color={color} textColorHeader={textColorHeader} 
              isDarkTheme={isDarkTheme} />
            
            <HeaderOption 
              label='Lediga jobb' 
              className='chevron' 
              isMobileScreen={state.isMobileScreen} 
              color={color} 
              textColorHeader={textColorHeader} 
              isDarkTheme={isDarkTheme} />
            
            {isOnline && 
            <Link to={'/Jobchaser/User-profile'} style={{color: state.isMobileScreen ? color : textColorHeader}}>
              <div className='profile-container'>
                <p>Profil</p>
                <img src={isOnline.profileImg ? isOnline.profileImg : anonymousUser} alt="user profile picture" style={{border: '2px solid ' + (state.menuClass ? color : textColorHeader)}}/>
              </div>

              {state.isMobileScreen && <img style={{bottom: '30%'}} className='chevron' src={!isDarkTheme ? blackChevron : whiteChevron} alt="chevron icon" />}
            </Link>}

            {isOnline ? 
            <div onClick={() => auth.signOut()} className="sign-out-cont">
              <button className='sign-out-btn' style={{color: state.isMobileScreen ? color : textColorHeader}}>
                Logga ut
              </button>
              <div className="sign-out-img-container">
                <img src={toggleSignOutIcon(state.isMobileScreen)} alt="sign out icon" />
              </div>
            </div> : 

            <HeaderOption 
              label='Logga in' 
              className='chevron' 
              isMobileScreen={state.isMobileScreen} 
              color={color} 
              textColorHeader={textColorHeader} 
              isDarkTheme={isDarkTheme} />}
          </nav>
     
        </div>
      </header>
    </>
  )
}

export default Header; 