// @ts-nocheck
import style from './profile.module.css'
import anonymousUser from '../../../components/header/assets/anonymous-user.png'
import { useSelector } from 'react-redux';

function ProfileInfo({user}){
  const color = useSelector(state => state.background.color); 
  const isOnline = useSelector(state => state.user.isOnline); 

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