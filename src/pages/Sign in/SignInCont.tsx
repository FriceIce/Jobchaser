// @ts-nocheck
import InputField from '../Post Job/InputTypes/InputField';
import SignInForm from './SignInForm'
import '../Post Job/form.css'
import './signIn.css'
import firebaseSignIn from './firebase';


const SignInCont = ({userOnline}) => {
  const {auth, user, provider} = firebaseSignIn(); 

  // Sign in function
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
  }

  userOnline(user)

  return (
    <>  
      <div className="sign-in-cont">
        <SignInForm />
        <div 
          style={{alignSelf: 'center', paddingTop: '1.5rem'}}>
          <button onClick={signInWithGoogle} className='submit-btn'>
            Sign in with Google
          </button>
        </div>
      </div>
    </>
  )
}

export default SignInCont; 
