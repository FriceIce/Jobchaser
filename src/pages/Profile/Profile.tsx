// @ts-nocheck
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Favorite from "./Favorite/Favorite";
import style from './profile-layout.module.css'

// redux
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Profile(){
  const {color, isDarkTheme} = useSelector(state => state.background); 
  const {isOnline} = useSelector(state => state.user); 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: 'background/setTextColorHeader', payload: color});
  },[isDarkTheme]) 
  return (
    <>
      <ProfileInfo user={isOnline}/>
      <div style={{background:color}} className={style.hr}></div>
      <Favorite />
    </>
  )
}

export default Profile; 