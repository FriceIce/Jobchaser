// @ts-nocheck
import style from './profile.module.css'
import anonymousUser from '../../../components/header/assets/anonymous-user.png'
import { useContext } from 'react';
import { Context } from '../../../App';
function ProfileInfo({user}){
  const {color, isOnline} = useContext(Context)

  return (
    <div style={{borderColor: color}} className={style.profileContainer}>
      <div className={style.profileImgCont} style={{borderColor: color}}>
        <img 
          className={isOnline.profileImg ? style.profileImgAvailable : style.anonymous} 
          src={isOnline.profileImg ? isOnline.profileImg : anonymousUser} alt='user picture' />
      </div>
      <div className={style.userContactInfo}>
        <p style={{color:color}}><b>Name:</b> {user.fullname}</p>
        <p style={{color:color}}><b>Email:</b> {user.email}</p>
      </div>
    </div>
  )
}

export default ProfileInfo;