// @ts-nocheck
import { useContext } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Favorite from "./Favorite/Favorite";
import style from './profile-layout.module.css'
import { Context } from "../../App";
function Profile(){
  const {isOnline, color, setTextColorHeader} = useContext(Context)
  setTextColorHeader(color); 
  return (
    <>
      <ProfileInfo user={isOnline}/>
      <div style={{background:color}} className={style.hr}></div>
      <Favorite />
    </>
  )
}

export default Profile; 