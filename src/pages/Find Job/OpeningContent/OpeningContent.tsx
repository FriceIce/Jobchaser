// ts-nocheck
import { useNavigate } from "react-router-dom"

const OpeningContent = () => {
  const navigate = useNavigate(); 

  return (
    <div className="search-opening-text-container">
        <div>
          <article className='search-opening-text'>
            <h1>We'll help you find your dream job!</h1>
            <p>Whether you're a seasoned professional looking for new challenges or a recent graduate eager to kick-start your career, Jobchaser is here to help you every step of the way. Join our community of job seekers today and unlock endless possibilities.</p>
          </article>
          <button 
            className='available-jobs-btn'
            onClick={() => navigate('/Jobchaser/Sign-in')}>                
            Join
          </button>
        </div>
      </div>
  )
}

export default OpeningContent;