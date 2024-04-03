// @ts-nocheck
// import '../../tailwind.css'
import { useForm } from 'react-hook-form'; 
import InputField from './InputTypes/InputField';
import { useState } from 'react';
import firebaseSignIn, { registerUser } from '../../../database/firebase'; 
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
  const { handleSubmit, register, formState: {errors}} = useForm();
  const [signIn, setSignIn] = useState(true); 

  // firebase
  const {
    auth, 
    user, 
    provider, 
    signInWithRedirect, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword
  } = firebaseSignIn(); 

  // Google
   const signInWithGoogle = () => {
    signInWithRedirect(auth, provider)
    .catch(error => {
      const errorMessage = error.message;
      alert('Inloggningen misslyckades.'); 
    })
  }


  const onSubmit = (data) => {
    // console.log(data)
    const {email, password, userName} = data;  

    if(signIn){
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert('Fel E-post eller lösenord.');
      });
      
    } else {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(userCredential)
        console.log(user)
        registerUser(user.uid, email, userName, password)
        return
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        alert('Kontot existerar redan. Vänligen logga in eller återställ ditt lösenord om du har glömt det.')
        // ..
      });

    }
  }

  return (
    <>
      <div className="google-container">
        <h1>Kom igång</h1>
        <div 
          onClick={signInWithGoogle}
          tabIndex={0} 
          aria-label='sign in with google button' 
          className="google-btn-container">
            
          <div  className='google-img-cont'>
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google icon" />
          </div>
          <p>Logga in med Google</p>
        </div>
      </div>

      <div className='hr'></div>

      <form className="post-job-form" onSubmit={handleSubmit(onSubmit)}>
        {signIn ? <h1>Logga in</h1> : <h1>Skapa konto</h1>}
        <div>
          <div>
            {!signIn && <InputField property={'userName'} input={true} label='För- och efternamn' type="text" required={true} placeholder='Skriv ditt för- och efternamn' errors={errors} register={register}/>}

            <InputField property={'email'} input={true} label='e-post' type="text" required={true} placeholder='Skriv in e-post' errors={errors} register={register}/>
            <InputField property={'password'} input={true} label='lösenord' type="password" required={true} placeholder='Skriv in lösenord' errors={errors} register={register}/>
          </div>

          <div onClick={() => setSignIn((pre) => !pre)} className='create-account-container'>
            { signIn ? <p>Skapa konto?</p> : <p>Logga in</p>}
          </div>
        </div>

        <div style={{alignSelf: 'center'}}>
          <button className='submit-btn'>
            { signIn ? 'Logga in' : 'Skapa'}
          </button>
          </div>
      </form>
    
    </>
  )
}

export default SignInForm; 