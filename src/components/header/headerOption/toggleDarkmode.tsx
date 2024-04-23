import style from '../css/toggle-button.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setIsDarkTheme } from '../../../features/background/backgroundSlice';
import { RootState } from '../../../redux/store';

type Prop = {
  sidemenu: null | string ,
  color: string;
  textColorHeader: string;
}

function ToggleDarkMode({sidemenu, color, textColorHeader}: Prop){
  const isDarkTheme = useSelector((state: RootState) => state.background.isDarkTheme); 
  const dispatch = useDispatch(); 
  
  // toggle Dark theme
  function toggleBgTheme(){
    dispatch({type: 'background/setColor'}); 
    dispatch(setIsDarkTheme())
    return
  }

  return (
    <>
      <div className={style.toggleContainer}>
        <p style={{color: sidemenu ? color : textColorHeader}}></p>
        <label className={style.switch}>
          <input onClick={toggleBgTheme} type="checkbox" id='checkbox' />
          
          <span className={style.slider}><img src="https://www.svgrepo.com/show/521865/sun.svg" style={{opacity: !isDarkTheme ? '1' : undefined}} alt="sun icon for light mode" /></span>
        </label>
      </div>
    </>
  )
}
export default ToggleDarkMode;