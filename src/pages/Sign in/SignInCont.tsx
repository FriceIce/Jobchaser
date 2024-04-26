import { PreloadContext } from '../../App';
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
        <picture>
          <source type='image/webp' />
            <img 
              className='signIn-hero-img'
              src={signIn.src} alt="image of people in the office" />
        </picture>
        <div className='side-img-container'><img src={writer.src}/></div>
        <div className="sign-in-cont">
          <SignInForm />
        </div>
      </div>
    </>
  )
}

export default SignInCont; 
