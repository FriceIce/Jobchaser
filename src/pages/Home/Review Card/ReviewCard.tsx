// @ts-nocheck
// Profile pic
import femalePPic from '../assets/Profile pic/Female pp.png'
import malePPic from '../assets/Profile pic/Male pp.png'
import femalePPic2 from '../assets/Profile pic/Female pp-1.png'
import malePPIC2 from '../assets/Profile pic/Male pp-1.png'

// Stars
import fiveStars from '../assets/stars/Rating=5, Mode=Light.png'
import almostFiveStars from '../assets/stars/Rating=4.5, Mode=Light.png'
import fourStars from '../assets/stars/Rating=4, Mode=Light.png'

// json
import reviewData from '../review data/reviews.json'

// hooks
import { useContext } from 'react'
import { Context } from '../../../App'

const ReviewCard = () => {
  // useContext
  const {isDarkTheme, bgTheme, color} = useContext(Context);

  // Tillfällig lösning
  const profile = [femalePPic, malePPic, femalePPic2, malePPIC2];
  const stars = [fiveStars, almostFiveStars, fourStars, fourStars];

  return (
    <div style={{color: color}} className="reviews-container">
      <h3 style={{color: color}}>Recensioner</h3>
      <ul className='reviews-card-layout'>
        {reviewData.map((card, index) => {
          return (
            <li style={{background: isDarkTheme ? 'black' : 'white', border:'1px solid whitesmoke'}} key={card.id} tabIndex={0} aria-label='A review card' className="review-card">
          <div className="upper-container">
            <div className="pp-container">
              <img src={profile[index]} alt="Profile pic" />
            </div>
            <div className="ratings-container">
              <img loading='lazy' src={stars[index]} alt="Ratings, five stars" />
            </div>
          </div>
          <article>
            <h4><span className="user-highlight">{card.userName}</span> har lämnat en recension.</h4>
            <div className="text-container">
              <h5>{card.header}</h5>
              <p>{card.content}</p>
            </div>
          </article>
        </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ReviewCard; 