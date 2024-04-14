import style from './profile.module.css'
import anonymousUser from '../../../components/header/assets/anonymous-user.png'
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

function ProfileInfo(){
  const color = useSelector((state: RootState) => state.background.color); 
  const isOnline = useSelector((state: RootState) => state.user.isOnline); 

  return (
    <div style={{borderColor: color}} className={style.profileContainer}>
      <div className={style.profileImgCont} style={{borderColor: color}}>
        <img 
          className={isOnline!.profileImg ? style.profileImgAvailable : style.anonymous} 
          src={isOnline!.profileImg ? isOnline!.profileImg : anonymousUser} alt='user picture' />
      </div>
      <div className={style.userContactInfo}>
        <p style={{color:color}}><b>Name:</b> {isOnline!.fullname}</p>
        <p style={{color:color}}><b>Email:</b> {isOnline!.email}</p>
      </div>
    </div>
  )
}

export default ProfileInfo;