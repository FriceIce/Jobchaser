// @ts-nocheck
import { useContext, useEffect } from 'react';
import style from '../css/toggle-button.module.css'
import { Context } from '../../../App';

import { useDispatch } from 'react-redux';
import { setIsDarkTheme } from '../../../features/background/backgroundSlice';

function ToggleDarkMode({sidemenu, color, textColorHeader}){
  const toggleButton = document.getElementById('checkbox'); 
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