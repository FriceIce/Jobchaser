import style from '../css/toggle-button.module.css'
import { useDispatch } from 'react-redux';
import { setIsDarkTheme } from '../../../features/background/backgroundSlice';

type Prop = {
  sidemenu: null | string ,
  color: string;
  textColorHeader: string;
}

function ToggleDarkMode({sidemenu, color, textColorHeader}: Prop){
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
        <p style={{color: sidemenu ? color : textColorHeader}}>Dark Mode</p>
        <label className={style.switch}>
          <input onClick={toggleBgTheme} type="checkbox" id='checkbox' />
          <span className={style.slider} />
        </label>
      </div>
    </>
  )
}
export default ToggleDarkMode;