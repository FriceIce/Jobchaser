// ts-nocheck
import { useNavigate } from "react-router-dom"

const OpeningContent = () => {
  const navigate = useNavigate(); 

  return (
    <div className="search-opening-text-container">
      <div>
        <article className='search-opening-text'>
          <h1>Lediga jobb för hela Sverige!</h1>
        </article>
        <button 
        style={{background: '#f09711', color: 'black'}}
          className='available-jobs-btn'
          onClick={() => navigate('/Jobchaser/Sign-in')}>                
          Bli medlem
        </button>
      </div>
    </div>
  )
}

export default OpeningContent;