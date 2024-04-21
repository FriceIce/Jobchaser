import { User } from '../../../features/user/userSlice';
import  ReactDom  from 'react-dom';
import style from './modal.module.css';

const Modal = ({verifiedIcon, isOnline, showModal}: {verifiedIcon: string; isOnline: User | false | null; showModal: boolean}) => {
  
  if(!showModal) return null

  return ReactDom.createPortal(
    <>
      <div className={style.backdrop}></div>
      <dialog className={style.modal} open={showModal}>
        <div className={style.container}>
          <div className={style.verificationCont}>
            <img src={verifiedIcon} alt="blue checkmark" />
          </div>
          <div className={style.modalContent}>
            <p>
            Vi har skickat ett verifieringsmejl till: <span>{isOnline && isOnline.email}</span>. <br /> Vänligen kontrollera din inkorg och eventuellt skräppost.
            </p>
            <button type="button">OK</button>
          </div>
        </div>
      </dialog>
    </>,
    
    document.getElementById('portal') as Element
  )
}

export default Modal;
