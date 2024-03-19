import './Home.css'
import { useNavigate } from 'react-router-dom'

// Profile pic
import femalePPic from './assets/Profile pic/Female pp.png'
import malePPic from './assets/Profile pic/Male pp.png'
import femalePPic2 from './assets/Profile pic/Female pp-1.png'
import malePPIC2 from './assets/Profile pic/Male pp-1.png'

// Stars
import fiveStars from './assets/stars/Rating=5, Mode=Light.png'
import almostFiveStars from './assets/stars/Rating=4.5, Mode=Light.png'
import fourStars from './assets/stars/Rating=4, Mode=Light.png'
import { useEffect } from 'react'

// Company logo




function Home(){
  const navigate = useNavigate(); 

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
              <h1>Find your dream job in one place</h1>
              <p>
                Welcome to Jobchaser, where your career aspirations meet opportunity. Discover, apply, and thrive with our user-friendly platform designed to simplify your job search journey. Whether you're a seasoned professional looking for new challenges or a recent graduate eager to kick-start your career, Jobchaser is here to help you every step of the way. Join our community of job seekers today and unlock endless possibilities.
              </p>
            </article>
            <div>
              <button 
                className='available-jobs-btn'
                onClick={() => navigate('/Jobchaser/Find-job')}>                
                Available Jobs
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
        <div className="reviews-container">
          <h3>The latest reviews</h3>
          <ul className='reviews-card-layout'>
            <li tabIndex={0} aria-label='A review card' className="review-card">
              <div className="upper-container">
                <div className="pp-container">
                  <img src={femalePPic} alt="Profile pic" />
                </div>
                <div className="ratings-container">
                  <img src={fiveStars} alt="Ratings, five stars" />
                </div>
              </div>
              <article>
                <h4><span className="user-highlight">Sofia Lundén</span> has left a review.</h4>
                <div className="text-container">
                  <h5>Fantastic Job Search Platform!</h5>
                  <p>Jobchaser has been an absolute game-changer for me in my job hunt. The interface is user-friendly, making it easy to navigate through listings and apply to relevant positions. I especially appreciate the personalized job recommendations feature, which has helped me discover opportunities I wouldn't have found otherwise. Highly recommend!</p>
                </div>
              </article>
            </li>
            <li tabIndex={0} aria-label='A review card' className="review-card">
              <div className="upper-container">
                <div className="pp-container">
                  <img src={malePPic} alt="Profile pic" />
                </div>
                <div className="ratings-container">
                  <img src={almostFiveStars} alt="Ratings, five stars" />
                </div>
              </div>
              <article>
                <h4><span className='user-highlight'>Will Smith</span> has left a review.</h4>
                <div className="text-container">
                  <h5>Efficient and Effective.</h5>
                  <p>I've tried numerous job search platforms, but Jobchaser stands out for its efficiency and effectiveness. The search filters are comprehensive, allowing me to narrow down my options quickly. Moreover, the notification system keeps me updated on new listings matching my criteria. Thanks to Jobchaser, I landed my dream job within weeks of using the platform. Couldn't be happier!</p>
                </div>
              </article>
            </li>
            <li tabIndex={0} aria-label='A review card' className="review-card">
              <div className="upper-container">
                <div className="pp-container">
                  <img src={femalePPic2} alt="Profile pic" />
                </div>
                <div className="ratings-container">
                  <img src={fourStars} alt="Ratings, five stars" />
                </div>
              </div>
              <article>
                <h4><span className="user-highlight">Mia Bryant</span> has left a review.</h4>
                <div className="text-container">
                  <h5>A Must-Have Tool for Job Seekers!</h5>
                  <p>Jobchaser is a must-have tool for anyone on the job hunt. What sets it apart is its intuitive design and robust features. The ability to save favorite listings and track application statuses has streamlined my job search process significantly. The platform's extensive database ensures that I never run out of options. Kudos to the Jobchaser team for creating such a valuable resource.</p>
                </div>
              </article>
            </li>
            <li tabIndex={0} aria-label='A review card' className="review-card">
              <div className="upper-container">
                <div className="pp-container">
                  <img src={malePPIC2} alt="Profile pic" />
                </div>
                <div className="ratings-container">
                  <img src={fourStars} alt="Ratings, five stars" />
                </div>
              </div>
              <article>
                <h4><span className="user-highlight">Simon Liamsson</span> has left a review.</h4>
                <div className="text-container">
                  <h5>Invaluable Resource for Job Seekers!</h5>
                  <p>As a recent graduate entering the job market, Jobchaser has been an invaluable resource. Not only does it aggregate job listings from various sources, but it also provides insights into company cultures and interview experiences shared by other users. The community aspect adds a unique dimension to the platform, fostering collaboration and support among job seekers. Thanks to Jobchaser, I secured multiple job offers in a competitive market. Highly impressed!</p>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home; 


