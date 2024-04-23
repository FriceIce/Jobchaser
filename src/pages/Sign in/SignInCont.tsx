import './css/form.css'
import './css/signIn.css'
import signInImg from './office-sign-in.avif'
import SignInForm from './SignInForm'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


const SignInCont = () => {  
  const dispatch = useDispatch(); 
  useEffect((): void => {
    dispatch({type: 'background/setTextColorHeader', payload: 'white'}); 
    return
  })
  return (
    <>  
      <div className="sign-in-layout">
        <picture>
          <source type='image/webp' />
            <img 
              className='signIn-hero-img'
              src={signInImg} alt="image of people in the office" />
        </picture>
        <div className='side-img-container'></div>
        <div className="sign-in-cont">
          <SignInForm />
        </div>
      </div>
    </>
  )
}

export default SignInCont; 
