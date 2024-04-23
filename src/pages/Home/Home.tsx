import './Home.css'
import { useNavigate } from 'react-router-dom'
import ReviewCard from './Review Card/ReviewCard'
import { useEffect } from 'react';

// Icons
import klarnaIcon from './assets/icon/klarna-logo.png'
// import amazonLightThemeIcon from './assets/icon/amazon-dark-color.svg'
import SEBIcon from './assets/icon/seb-logo.png'
import ChasIcon from './assets/icon/chas-logo.png'
import scaniaLogo from './assets/icon/scania-logo.png'

// img
import heroImg from './assets/home-page-hero-pic.avif'

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setTextColorHeader } from '../../features/background/backgroundSlice';
import { RootState } from '../../redux/store';


function Home(){
  const {color, isDarkTheme} = useSelector((state: RootState) => state.background); 
  const {isOnline} = useSelector((state: RootState) => state.user); 
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 

  useEffect(() => {
    dispatch(setTextColorHeader('white'));
    
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

  const boxShadow = (darkTheme: boolean) => {
    return darkTheme ? '1px 3px 5px rgba(255, 255, 255, 0.25)': '1px 3px 5px rgba(0, 0, 0, 0.25)';
  }
  return (
    <>
      <div className="home-layout">
        <div className="hero-container">
          <picture>
            
            <source type='image/webp' />
              <img 
                className='home-hero-img'
                loading='lazy'
                src={heroImg} alt="hero image of a women laughing" 
              />
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
                onClick={() => !isOnline ? navigate('/Jobchaser/Sign-in') : navigate('/Jobchaser/User-profile')}>                
                {!isOnline ? 'Registrera dig' : 'Profil'}
              </button>
            </div>
          </div>
        </div>
        <div className="middle-container">
          <h2 style={{color: color}}>Upptäck jobbmöjligheter från företag</h2>
          <div className="companies-logo-layout">
            <div className="company-logo-container" style={{boxShadow: boxShadow(isDarkTheme)}}><img loading='lazy' src={klarnaIcon} alt="Amazon logo" /></div>
            <div className="company-logo-container" style={{boxShadow: boxShadow(isDarkTheme)}}><img loading='lazy' src={SEBIcon} alt="Google logo" /></div>
            <div className="company-logo-container" style={{boxShadow: boxShadow(isDarkTheme)}}><img loading='lazy' src={ChasIcon} alt="Netflix logo" /></div>
            <div className="company-logo-container" style={{boxShadow: boxShadow(isDarkTheme)}}><img loading='lazy' src={scaniaLogo} alt="Android logo" /></div>
          </div>
        </div>
        <ReviewCard />
      </div>
    </>
  )
}

export default Home; 


