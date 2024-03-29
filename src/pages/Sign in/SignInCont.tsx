// @ts-nocheck
import InputField from './InputTypes/InputField';
import SignInForm from './SignInForm'
import './css/form.css'
import './css/signIn.css'
import firebaseSignIn from './firebase';
import { useContext } from 'react';
import { Context } from '../../App';


const SignInCont = () => {
  const {auth, user, provider, signInWithRedirect} = firebaseSignIn(); 
  const {setTextColorHeader} = useContext(Context);
  setTextColorHeader('white'); 
  return (
    <>  
      <div className="sign-in-layout">
        <picture>
          <source type='image/webp' />
            <img 
              className='signIn-hero-img'
              loading='lazy'
              src={'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="hero image of a women laughing" />
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
