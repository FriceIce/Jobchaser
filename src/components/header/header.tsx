import './css/header.css';
import './css/menu.css'

// icon
import whiteChevron from './assets/chevron-right-white.svg'
import blackChevron from './assets/chevron-right-black.svg'
import jobchaserLogo from './assets/Jobchaser-logo.svg'
import anonymousUser from './assets/anonymous-user.png'
import signOutWhite from './assets/sign-out-white.svg'
import signOutBlack from './assets/sign-out-black.svg'

// other
import { Link } from 'react-router-dom';
import firebaseSignIn from '../../../database/firebase';
import SideMenu from './sideMenu/Sidemenu';
import HeaderOption from './headerOption/headerOption';
import ToggleDarkMode from './headerOption/toggleDarkmode'

// redux
import { useDispatch, useSelector } from 'react-redux';
import { IS_MOBILE, STYLE_TRANSITION, TOGGLE_MENU, IS_DESKTOP } from '../../features/sidemenu/sidemenuSlicer';
import { useEffect } from 'react';
import { RootState } from '../../redux/store';


function Header(){
  const isOnline = useSelector ((state: RootState) => state.user.isOnline); 
  const {textColorHeader, color, isDarkTheme, background} = useSelector((state: RootState) => state.background); 
  const {
    isMobileScreen, 
    menuClass, 
    checked, 
    styleTransition, 
  } = useSelector((state: RootState) => state.sidemenu);
  const dispatch = useDispatch(); 

  // firebase auth for sign out
  const {auth} = firebaseSignIn();

  // varibles for addEventListener for screen size changes. 
  const mediaWith = window.matchMedia('(width < 1249px)'); 
  const bodyElement = document.body; 
  
  // Without this line the background color is acting weird. 
  bodyElement.style.background = isDarkTheme ? 'linear-gradient(147deg, #4d4855 0%, #000000 74%)' : 'whitesmoke'

  useEffect(() => {
    dispatch({type: 'background/setBackground'});
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
    if(mediaWith.matches) dispatch(IS_MOBILE(true)); 

    mediaWith.addEventListener('change', (e: MediaQueryListEvent) => {
      if(!e.matches) {
        // console.log('desktop')
        dispatch(IS_DESKTOP());
        return
      }
      
      dispatch(IS_MOBILE(true));
      dispatch(STYLE_TRANSITION('none'));
    })

    return
  }, [])

  // --------------------

  function toggleSignOutIcon(screen: boolean){
    if(screen) return color ? signOutWhite : signOutBlack;
    if(!screen) return textColorHeader === 'white' ? signOutWhite : signOutBlack;

  }
  return (
    <>
      <header>
        <div className="header-container">
          <div className='title-container' style={{color: menuClass ? color : textColorHeader}}>
            <img tabIndex={0} src={jobchaserLogo} alt="Jobchaser logo" />
            <span className='char-in-logo' style={{color: !menuClass ? textColorHeader : color}}>J</span>
            <p>Jobchaser</p>
            <p>EST 2023</p>
          </div>

          <SideMenu 
            menuClass={menuClass} 
            textColorHeader={textColorHeader} 
            checked={checked} 
            color={color}
          />
          
          <nav 
            onClick={(e: React.MouseEvent<HTMLElement>) => {
              const target = e.target as HTMLElement
              if(target.tagName === 'SPAN') return 
              if(target.tagName === 'INPUT') return 
              if(menuClass) return dispatch(TOGGLE_MENU());
            }} 
            className={`link-options ${menuClass}`} style={{transition: styleTransition, background: isMobileScreen ? background : undefined }}>

            <ToggleDarkMode 
              color={color} 
              textColorHeader={textColorHeader} 
              sidemenu={menuClass}
             />  

            <HeaderOption 
              label='Hem' 
              className='chevron' 
              isMobileScreen={isMobileScreen} 
              color={color} 
              textColorHeader={textColorHeader} 
              isDarkTheme={isDarkTheme} />
            
            <HeaderOption 
              label='Lediga jobb' 
              className='chevron' 
              isMobileScreen={isMobileScreen} 
              color={color} 
              textColorHeader={textColorHeader} 
              isDarkTheme={isDarkTheme} />
            
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

            <HeaderOption 
              label='Logga in' 
              className='chevron' 
              isMobileScreen={isMobileScreen} 
              color={color} 
              textColorHeader={textColorHeader} 
              isDarkTheme={isDarkTheme} 
              />}
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header; 

