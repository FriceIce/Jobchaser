import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import { useContext } from "react";
import { PreloadContext } from "../../../App";
import ImageHandler from "../../../modules/ImageHandler";
import { RootState } from "../../../redux/store";

const OpeningContent = () => {
  const [, job] = useContext(PreloadContext); 
  const {isOnline} = useSelector((state: RootState) => state.user);
  const navigate = useNavigate(); 

  return (
    <div className="search-opening-text-container">
      <ImageHandler 
        src={job.src} 
        className="jobb-hero-img" 
        role="presentaion" 
        alt="Picture of a woman with her hands crossed." 
      />
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