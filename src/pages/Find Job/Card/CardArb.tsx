// @ts-nocheck
import logo from '../../../../public/assets/ArbetsförmedlingenLogo 1.svg'
import './cardArb.css'
import SavedJobAd from './SaveJobAd/SaveJobAd'
import card from './modules/card'

const CardArb = ({jobs}) => {  
  return (

    <div className="card-container">
      <ul className='card-layout'>
        {jobs.map(cardObj => card(cardObj))}
      </ul>
    </div>
 
  )
}

export default CardArb; 


