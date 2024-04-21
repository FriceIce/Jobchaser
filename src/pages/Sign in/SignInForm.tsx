import { SubmitHandler, useForm, FormProvider } from 'react-hook-form'; 
import InputField from './InputTypes/InputField';
import { useState } from 'react';
import firebaseSignIn, { registerUser } from '../../../database/firebase'; 
import { CreateUser } from '../../features/user/userSlice';
import { useDispatch } from 'react-redux';

const SignInForm = () => {
  const methods = useForm<CreateUser>();
  const [signIn, setSignIn] = useState(true); 
  const dispatch = useDispatch();  

  // firebase
  const {
    auth, 
    provider, 
    signInWithPopup, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword
  } = firebaseSignIn(); 

  // Google
   const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((user) => {
      console.log(user)
    })
    .catch(error => {
      const errorMessage: string = error.message;
      alert('Inloggningen misslyckades. ' + errorMessage); 
    })
  }


  const onSubmit: SubmitHandler<CreateUser> = (data): void => {
    // console.log(data)
    const {email, password, userName}: CreateUser = data;  

    if(signIn){
      signInWithEmailAndPassword(auth, email!, password!)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // console.log('Email is verified: ', user.emailVerified);
      })
      .catch((error) => {
        const errorMessage: string = error.message;
        // ..
        alert('Fel E-post eller lösenord. ' + errorMessage);
      });
      
    } else {
      createUserWithEmailAndPassword(auth, email!, password!)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(userCredential)
        registerUser(user.uid, email!, userName, password, null);
        dispatch({type: 'user/userState', payload: {userId: user.uid, fullname: userName, email, password}})
        return
      })
      .catch((error) => {
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

        <FormProvider {...methods}>
          <form className="post-job-form" onSubmit={methods.handleSubmit(onSubmit)}>
            {signIn ? <h1>Logga in</h1> : <h1>Skapa konto</h1>}
            <div>
              <div>
                {!signIn && <InputField property={'userName'} label='För- och efternamn' type="text" required={true} placeholder='Skriv ditt för- och efternamn' errors={methods.formState.errors}/>}
                <InputField property={'email'} label='e-post' type="text" required={true} placeholder='Skriv in e-post' errors={methods.formState.errors}/>
                <InputField property={'password'} label='lösenord' type="password" required={true} placeholder='Skriv in lösenord' errors={methods.formState.errors}/>
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
        </FormProvider>
    </>
  )
}

export default SignInForm; 