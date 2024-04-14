import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Favorite from "./Favorite/Favorite";
import style from './profile-layout.module.css'
import { useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function Profile(){
  const {color, isDarkTheme} = useSelector((state: RootState) => state.background); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'background/setTextColorHeader', payload: color});
  },[isDarkTheme]) 
  return (
    <>
      <ProfileInfo />
      <div style={{background:color}} className={style.hr}></div>
      <Favorite />
    </>
  )
}

export default Profile; 