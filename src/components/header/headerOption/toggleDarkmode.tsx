// @ts-nocheck
import { useContext, useEffect } from 'react';
import style from '../css/toggle-button.module.css'
import { Context } from '../../../App';

function ToggleDarkMode({sidemenu, color, textColorHeader}){
  const {setIsDarkTheme, isDarkTheme} = useContext(Context);
  const toggleButton = document.getElementById('checkbox'); 
  
  
  // toggle Dark theme
  function toggleBgTheme(){
    console.log(isDarkTheme)
    setIsDarkTheme((prevTheme => !prevTheme));
    return
  }

  return (
    <>
      <div className={style.toggleContainer}>
        <p style={{color: sidemenu ? color : textColorHeader}}>Dark Mode</p>
        <label className={style.switch}>
          <input onClick={() => toggleBgTheme()} type="checkbox" id='checkbox' />
          <span className={style.slider} />
        </label>
      </div>
    </>
  )
}
export default ToggleDarkMode;