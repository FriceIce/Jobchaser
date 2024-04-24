import style from './profile.module.css'
import verifiedIcon from './assets/verified.svg'
import anonymousUser from '../../../components/header/assets/anonymous-user.png'
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import firebaseSignIn from '../../../../database/firebase';
import { User } from 'firebase/auth';
import Modal from '../Modal/Modal';
import { useState } from 'react';

function ProfileInfo(){
  const color = useSelector((state: RootState) => state.background.color); 
  const isOnline = useSelector((state: RootState) => state.user.isOnline);
  const [modal, setModal] = useState<boolean>(false); 

  const {auth, sendEmailVerification} = firebaseSignIn();
  const user = auth.currentUser; 

  const checkForVerification = (user: User | null) => {
    return (
      <div
        onClick={() => validateEmail(user)} 
        className={style.checkMarkCont}>
        <img 
          className={style.checkMarkImg} 
          src={verifiedIcon} 
          style={{filter: !user?.emailVerified ? 
          'grayscale(100%)' : ''}} 
          alt={user?.emailVerified ? "blue checkmark" : 'gray checkmark'} />
        <p style={{color: color}}>{user?.emailVerified ? 'Verifierad' : 'Få ett verifieringsmejl'}</p>
      </div>
    )
  }

  const validateEmail = (user: User | null): void => {
    if(user && !user.emailVerified){
      sendEmailVerification(user, {url: 'https://FriceIce.github.io/Jobchaser/User-profile'})
      .then(() => console.log('Email verification sent!'));
      setModal(true);
    }
    return
  }

  return (
    <div
      onClick={(e) => {
        const target = e.target as HTMLElement; 
        if(target.tagName !== 'IMG') !user?.emailVerified && setModal(false);
      }}
      style={{borderColor: color}}
      className={style.profileContainer}
      >
      {checkForVerification(user)}
      <Modal verifiedIcon={verifiedIcon} isOnline={isOnline} showModal={modal}/>
      <div
        className={style.profileImgCont} 
        style={{borderColor: color}}>
        <img 
          className={isOnline && isOnline.profileImg ? style.profileImgAvailable : style.anonymous} 
          src={isOnline && isOnline.profileImg ? isOnline.profileImg : anonymousUser} alt='user picture' />
      </div>
      <div className={style.userContactInfo}>
        <p style={{color:color}}><b>Name:</b> {isOnline && isOnline.fullname}</p>
        <p style={{color:color}}><b>Email:</b> {isOnline && isOnline.email}</p>
      </div>
    </div>
  )
}

export default ProfileInfo;