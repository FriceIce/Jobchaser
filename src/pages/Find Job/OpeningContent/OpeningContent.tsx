// @ts-nocheck
import { useNavigate } from "react-router-dom"
import heroImg from '../Card/assets/start-page-background.jpg'
import { useSelector } from "react-redux";

const OpeningContent = () => {
  const {isOnline} = useSelector(state => state.user);
  const navigate = useNavigate(); 

  return (
    <div className="search-opening-text-container">
      <picture>
          <source type='image/webp' />
            <img 
              className='jobb-hero-img'
              loading='lazy'
              src={heroImg} alt="hero image of a women laughing" />
      </picture>
      <div>
        <article className='search-opening-text'>
          <h1>Lediga jobb för hela Sverige!</h1>
        </article>
        <button 
        style={{background: '#f09711', color: 'black', position: 'relative'}}
          className='available-jobs-btn'
          onClick={() => !isOnline ? navigate('/Jobchaser/Sign-in') : navigate('/Jobchaser/User-profile')}>                
          Bli medlem
        </button>
      </div>
    </div>
  )
}

export default OpeningContent;