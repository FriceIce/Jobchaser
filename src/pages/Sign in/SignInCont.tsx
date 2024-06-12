import { PreloadContext } from '../../App';
import ImageHandler from '../../modules/ImageHandler';
import './css/form.css'
import './css/signIn.css'
import SignInForm from './SignInForm'
import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';


const SignInCont = () => { 
  const [,,signIn, writer] = useContext(PreloadContext)
 
  const dispatch = useDispatch(); 
  useEffect((): void => {
    dispatch({type: 'background/setTextColorHeader', payload: 'white'}); 
    return
  })
  return (
    <>  
      <div className="sign-in-layout">
      <ImageHandler
        src={signIn.src} 
        className={'signIn-hero-img'} 
        role={'presentation'} 
        alt='A couple of people having a meeting' 
      />
        <div className='side-img-container'><img src={writer.src}/></div>
        <div className="sign-in-cont">
          <SignInForm />
        </div>
      </div>
    </>
  )
}

export default SignInCont; 
