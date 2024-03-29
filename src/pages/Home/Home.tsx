// @ts-nocheck
import './Home.css'
import { useNavigate } from 'react-router-dom'
import ReviewCard from './Review Card/ReviewCard'
import { useEffect, useContext } from 'react';
import firebaseSignIn from '../Sign in/firebase';
import { Context } from '../../App';

// Icons
import amazonDarkThemeIcon from './assets/icon/amazon-white-color.svg'
import amazonLightThemeIcon from './assets/icon/amazon-dark-color.svg'
import googleIcon from './assets/icon/google.svg'
import netflixIcon from './assets/icon/netflix-icon.svg'
import androidIcon from './assets/icon/android-color.svg'

// img
import heroImg from './assets/home-page-hero-pic.avif'


function Home(){
  // useContext
  console.log('hi')
  const {isDarkTheme, bgTheme, color, setTextColorHeader} = useContext(Context);
  setTextColorHeader('white');

  const navigate = useNavigate(); 
  const {auth, user, provider} = firebaseSignIn();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          entry.target.classList.add('show-logo')
        }
      })
    })

    const companyLogos = Array.from(document.getElementsByClassName('company-logo-container')); 
    companyLogos.forEach((logo) => observer.observe(logo))
  }, [])
  return (
    <>
      <div style={bgTheme} className="home-layout">
        <div className="hero-container">
          <picture>
            <source type='image/webp' />
              <img 
                className='home-hero-img'
                loading='lazy'
                src={heroImg} alt="hero image of a women laughing" />
          </picture>
          <div className='opening-text-container'>
            <article className="opening-text">
            <h1>Vi hjälper dig med ditt <span style={{color: '#f09711'}}>jobbsökande!</span></h1>
            <p>
            Välkommen till nästa steg i din karriär - vi tar dig närmare anställningen du strävar efter. 
              </p>
            </article>
            <div className='btn-layout'>
              <button 
                className='available-jobs-btn'
                onClick={() => navigate('/Jobchaser/Find-job')}>                
                Lediga jobb
              </button>
              <button 
                className='available-jobs-btn'
                onClick={() => navigate('/Jobchaser/Sign-in')}>                
                Registrera dig
              </button>
            </div>
          </div>
        </div>
        <div className="middle-container">
          <h2 style={{color: color}}>Partnerskap med företag världen över.</h2>
          <div className="companies-logo-layout">
            <div className="company-logo-container"><img loading='lazy' src={ !isDarkTheme ? amazonLightThemeIcon : amazonDarkThemeIcon} alt="Amazon logo" /></div>
            <div className="company-logo-container"><img loading='lazy' src={googleIcon} alt="Google logo" /></div>
            <div className="company-logo-container"><img loading='lazy' src={netflixIcon} alt="Netflix logo" /></div>
            <div className="company-logo-container"><img loading='lazy' src={androidIcon} alt="Android logo" /></div>
          </div>
        </div>
        <ReviewCard />
      </div>
    </>
  )
}

export default Home; 


