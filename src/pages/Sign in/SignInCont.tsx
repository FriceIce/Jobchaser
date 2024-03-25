// @ts-nocheck
import InputField from './InputTypes/InputField';
import SignInForm from './SignInForm'
import './CSS/form.css'
import './CSS/signIn.css'
import firebaseSignIn from './firebase';


const SignInCont = () => {
  const {auth, user, provider, signInWithRedirect} = firebaseSignIn(); 

  return (
    <>  
      <div className="sign-in-layout">
        <div className='side-img-container'></div>
        <div className="sign-in-cont">
          <SignInForm />
        </div>
      </div>
    </>
  )
}

export default SignInCont; 
