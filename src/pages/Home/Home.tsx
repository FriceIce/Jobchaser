// @ts-nocheck
import './Home.css'
import { useNavigate } from 'react-router-dom'
import ReviewCard from './Review Card/ReviewCard'
import { useEffect } from 'react';
import firebaseSignIn from '../Sign in/firebase';

function Home({userOnline}){
  const navigate = useNavigate(); 
  const {auth, user, provider} = firebaseSignIn();
  userOnline(user)

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
      <div className="home-layout">
        <div className="hero-container">
          <div className='opening-text-container'>
            <article className="opening-text">
              <h1>AIM HIGHER FLY HIGHER</h1>
              <p>
                Welcome to Jobchaser, where your career aspirations meet opportunity. Discover, apply, and thrive with our user-friendly platform designed to simplify your job search journey. 
              </p>
            </article>
            <div className='btn-layout'>
              <button 
                className='available-jobs-btn'
                onClick={() => navigate('/Jobchaser/Find-job')}>                
                Available Jobs
              </button>
              <button 
                className='available-jobs-btn'
                onClick={() => navigate('/Jobchaser/Sign-in')}>                
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="middle-container">
          <h2>Trusted by 5,000+ Companies Worldwide</h2>
          <div className="companies-logo-layout">
            <div className="company-logo-container"><img src="https://www.svgrepo.com/show/475634/amazon-color.svg" alt="Amazon logo" /></div>
            <div className="company-logo-container"><img src="https://www.svgrepo.com/show/452216/google.svg" alt="Google logo" /></div>
            <div className="company-logo-container"><img src="https://www.svgrepo.com/show/354109/netflix-icon.svg" alt="Netflix logo" /></div>
            <div className="company-logo-container"><img src="https://www.svgrepo.com/show/475631/android-color.svg" alt="Android logo" /></div>
          </div>
        </div>
        <ReviewCard />
      </div>
    </>
  )
}

export default Home; 


